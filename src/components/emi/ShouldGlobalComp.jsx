import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Flex, Block } from '../../styles/generics/GenericContainers';
import { StyledTitleP } from '../../styles/generics/GenericTitles';
/*
import themea from '../../assets/img-temp/themea.png';
import theme1 from '../../assets/img-temp/theme1.png';
import theme2 from '../../assets/img-temp/theme2.png';
import theme3 from '../../assets/img-temp/theme3.png';
import theme4 from '../../assets/img-temp/theme4.png';
import theme5 from '../../assets/img-temp/theme5.png';
import theme6 from '../../assets/img-temp/theme6.png';
import theme7 from '../../assets/img-temp/theme7.png';  */
import Should from '../../mockdata/should.json';
import Scoring from './scoring.json';

const GlobalReco = styled(Flex)`
padding-top:20px;
flex-direction: row;
display:flex;
`;

const StyledScore = styled(Block)`
height:50px;
margin:10px;
`;

const DisplayThemesScores = ({ handleClickTheme, themeId }) => {
  const { score } = Should.find((item) => item.id === themeId);
  let scoreRepr = null;
  if (Scoring.themes_scoring.find((scoring) => scoring.id === themeId)) {
    const themeScoring = Scoring.themes_scoring.find((scoring) => scoring.id === themeId);
    const scoresReprs = themeScoring.scores_reprs;
    scoreRepr = scoresReprs.find((item) => item.min <= score && item.max >= score);
  }

  return (
    <button type="button" onClick={() => handleClickTheme(themeId)}><img src={scoreRepr.icone} alt={`score-${score}`} /></button>
  );
};

const DisplayRecoList = ({ should, themeId }) => (
  <div>
    <p>
      recommandation du thème :
      {themeId}
    </p>
    {
      should.map((item) => (
        <div>
          <StyledTitleP>{item.content}</StyledTitleP>
          <a href={item.url}>{item.url}</a>
        </div>
        ))
      }
  </div>
  );

export default function ShouldGlobalComp() {
  const [currId, setCurrId] = useState(0);
  const [should, setShould] = useState([]);

  const handleClickTheme = (id) => {
    setCurrId(parseInt(id, 10));
    const shouldList = Should.find((item) => item.id === id).should;
    setShould(shouldList);
  };

  return (
    <GlobalReco>
      {
        Should.map((item) => (
          <StyledScore>
            <DisplayThemesScores
              key={item.id}
              handleClickTheme={handleClickTheme}
              themeId={item.id}
            />
          </StyledScore>
          ))
      }
      <DisplayRecoList should={should} themeId={currId} />
    </GlobalReco>
  );
}

DisplayThemesScores.propTypes = {
  themeId: PropTypes.number.isRequired,
  handleClickTheme: PropTypes.func.isRequired,
};

DisplayRecoList.propTypes = {
  themeId: PropTypes.number.isRequired,
  should: PropTypes.arrayOf(PropTypes.string).isRequired,
};

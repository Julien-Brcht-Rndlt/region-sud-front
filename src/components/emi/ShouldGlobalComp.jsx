import { useState, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Flex } from '../../styles/generics/GenericContainers';
import { StyledTitleP } from '../../styles/generics/GenericTitles';
import EvalContext from '../../contexts/EvalContext';
import themea from '../../assets/img-temp/themea.png';
import theme1 from '../../assets/img-temp/theme1.png';
import theme2 from '../../assets/img-temp/theme2.png';
import theme3 from '../../assets/img-temp/theme3.png';
import Scoring from './scoring.json';

const GlobalReco = styled(Flex)`
padding-top:47px;
flex-direction:column;
display:flex;
`;

const StyledScore = styled(Flex)`
width:100px;
flex-direction: row;
`;

const ShouldItemContainer = styled(Flex)`
width:80%;
background-color:#f0ecec;
padding-left:15px;
flex-direction: column;
padding-bottom: 10px;

`;

const ImageTheme = styled.img`
width: 40px;
height:40px;
margin: 30px 45px 30px 30px;
`;

const ImageScore = styled.img`
width: 80px;
height:80px;
`;

const ButtonScore = styled.button`
width:100px;
height:100px;
margin:10px;
`;

const DisplayThemesScores = ({ score, handleClickTheme, themeId }) => {
  let scoreRepr = null;
  if (Scoring.themes_scoring.find((scoring) => scoring.id === themeId)) {
    const themeScoring = Scoring.themes_scoring.find((scoring) => scoring.id === themeId);
    const scoresReprs = themeScoring.scores_reprs;
    scoreRepr = scoresReprs.find((item) => item.min <= score && item.max >= score);
  }

  return (
    scoreRepr && (
      <ButtonScore type="button" onClick={() => handleClickTheme(themeId)}>
        <ImageScore src={scoreRepr.icone} alt={`score-${score}`} />
      </ButtonScore>
    )
  );
};

const DisplayThemeIcones = styled(Flex)`
height: 90px;`;

const DisplayRecoList = ({ should, themeId }) => (
  <div>
    <p>
      recommandation du thème :
      {themeId}
    </p>
    {
      should.map((item) => (
        <ShouldItemContainer>
          <StyledTitleP>{item.content}</StyledTitleP>
          <a href={item.url}>{item.url}</a>
        </ShouldItemContainer>
        ))
      }
  </div>
  );

export default function ShouldGlobalComp() {
  const [currId, setCurrId] = useState(0);
  const [should, setShould] = useState([]);

  const { evalState } = useContext(EvalContext);

  let globalEval = [];
  if (evalState) {
    globalEval = evalState.themes.map((theme) => ({
      id: theme.id,
      score: theme.score,
      should: theme.shouldList,
    }));
  }

  const handleClickTheme = (id) => {
    setCurrId(parseInt(id, 10));
    const shouldList = globalEval.find((item) => item.id === id).should;
    setShould(shouldList);
  };

  return (
    <GlobalReco>
      <DisplayThemeIcones>
        <ImageTheme src={themea} alt="theme 1" />
        <ImageTheme src={theme1} alt="theme 2" />
        <ImageTheme src={theme2} alt="theme 3" />
        <ImageTheme src={theme3} alt="theme 4" />
      </DisplayThemeIcones>
      <StyledScore>
        {
        globalEval.map((item) => (
          <>
            <DisplayThemesScores
              key={item.id}
              handleClickTheme={handleClickTheme}
              themeId={item.id}
              score={globalEval.find((theme) => theme.id === item.id).score}
            />
          </>
          ))
      }
      </StyledScore>
      <DisplayRecoList should={should} themeId={currId} />
    </GlobalReco>
  );
}

DisplayThemesScores.propTypes = {
  themeId: PropTypes.number.isRequired,
  handleClickTheme: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};

DisplayRecoList.propTypes = {
  themeId: PropTypes.number.isRequired,
  should: PropTypes.arrayOf(PropTypes.string).isRequired,
};

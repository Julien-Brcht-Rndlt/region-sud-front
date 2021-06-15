import EvalThemeShouldList from './EvalThemeShouldList';
import EvalThemeScoring from './EvalThemeScoring';

export default function EvalThemeResult() {
    return (
      <div>
        <EvalThemeScoring />
        <EvalThemeShouldList />
        <p>Vous pourrez voir toutes les recommandations à la fin de l&#39;évaluation.</p>
      </div>
    );
}
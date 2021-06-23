import EvalThemeShouldList from './EvalThemeShouldList';
import EvalThemeScoring from './EvalThemeScoring';

export default function EvalThemeResult() {
    return (
      <div>
        <EvalThemeScoring />
        <EvalThemeShouldList />
      </div>
    );
}

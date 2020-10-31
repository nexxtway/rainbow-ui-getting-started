import { MarkdownOutput } from 'react-rainbow-components';
import 'highlight.js/styles/dracula.css';
import { ApplicationContainer, StyledLogo, StyledContent, Title, StepText } from './styled';

const text = '```js\nconst data = \'Lorem ipsum....\';```';


function App() {
  return (
    <ApplicationContainer className="App">
        <StyledLogo />
        <StyledContent>
            <Title>
                Steps to Getting-Started with <strong>rainbow ui</strong>
            </Title>
            <StepText>
                1. Foo
            </StepText>
            <MarkdownOutput id="markdown-output-1" value={text} />
        </StyledContent>
    </ApplicationContainer>
  );
}

export default App;

import { TextRule } from '../../framework/rule/TextRule';

export class NamuWikiRule implements TextRule {
  public match(src: string): boolean {
    return src.startsWith('!꺼라 ');
  }

  public async makeMessage(src: string): Promise<string> {
    const match = /!꺼라 (.*)/.exec(src);
    const word = match ? match[1] : '';
    return `https://namu.wiki/w/${word}`;
  }
}

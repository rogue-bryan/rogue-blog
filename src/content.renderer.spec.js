import {getFileTree} from './content.renderer';
import path from 'path';

describe('render.markdown', () => {
    it('when given a folder of md files, expect the resulting json to match', async () => {
        const dir = path.resolve(__dirname, './__tests__/content');
        const json = await getFileTree(dir);
        expect(json).toEqual({"children": [{"contents": `<p>First post! Blogging is now enabled using Markdown!</p>
`, "extension": ".md", "name": "first-post.md", "path": "C:\\source\\rogue-blog\\src\\__tests__\\content\\first-post.md", "size": 101, "slug": "first-post", "title": "First Post!", "type": "file"}, {"children": [{"contents": `<h1>Bryan's Tech Blog</h1>
<p>Lorem</p>
`, "extension": ".md", "name": "home.md", "path": "C:\\source\\rogue-blog\\src\\__tests__\\content\\home\\home.md", "size": 28, "type": "file"}, {"children": [{"contents": `<h1>Bryan's Tech Blog</h1>
<p>Lorem</p>
`, "extension": ".md", "name": "second.md", "path": "C:\\source\\rogue-blog\\src\\__tests__\\content\\home\\second\\second.md", "size": 28, "type": "file"}], "name": "second", "path": "C:\\source\\rogue-blog\\src\\__tests__\\content\\home\\second", "size": 28, "type": "directory"}], "name": "home", "path": "C:\\source\\rogue-blog\\src\\__tests__\\content\\home", "size": 56, "type": "directory"}], "name": "content", "path": "C:\\source\\rogue-blog\\src\\__tests__\\content", "size": 157, "type": "directory"});
    });
});
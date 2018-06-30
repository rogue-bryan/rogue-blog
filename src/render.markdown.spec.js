import renderMarkdown from './render.markdown'
import path from 'path';

describe('render.markdown', () => {
    it('when given a folder of md files, expect the resulting json to match', async () => {
        const dir = path.resolve(__dirname, './__tests__/content')
        const json = await renderMarkdown(dir)
        expect(json).toEqual({
            'first-post': {
                'contents': `<p>First post! Blogging is now enabled using Markdown!</p>
`, 'name': 'first-post.md', 'path': '/first-post.md', 'slug': 'first-post', 'title': 'First Post!'
            }, 'home': {
                'children': [{
                    'contents': `<h1>Bryan's Tech Blog</h1>
<p>Lorem</p>
`, 'name': 'home.md', 'path': '/home/home.md'
                }, {
                    'children': [{
                        'contents': `<h1>Bryan's Tech Blog</h1>
<p>Lorem</p>
`, 'name': 'second.md', 'path': '/home/second/second.md'
                    }], 'name': 'second', 'path': '/home/second'
                }], 'name': 'home', 'path': '/home'
            }
        })
    })
})
import { Comments } from './Comments';


test('header should render links with correct hrefs', () => {
    render(
      <Comments />
    );
  
    expect(screen.getByTitle('Dashboard')).toBeTruthy();
  });
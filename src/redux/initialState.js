const initialState = {
    posts: [
        {
            id: '1',
            title: 'Article I',
            shortDescription: 'Integer semper vestibulum.',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper vestibulum pharetra. Pellentesque vulputate nisl et congue vehicula. Aliquam cursus pharetra pulvinar. Etiam mauris eros, tempus vitae posuere at, maximus eu tellus. Proin in rhoncus lectus. Vivamus vel purus placerat, vestibulum lacus et, tempus lorem. Nam tincidunt congue bibendum. ',
            publishedDate: new Date('02-12-2024'),
            category: "News",
            author: 'John Doe'
        },
        {
            id: '2',
            title: 'Article II',
            shortDescription: 'Lorem ipsum dolor sit amet.',
            content: ' Pellentesque vulputate nisl et congue vehicula. Aliquam cursus pharetra pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper vestibulum pharetra. Pellentesque vulputate nisl et congue vehicula. Aliquam cursus pharetra pulvinar. Etiam mauris eros, tempus vitae posuere at, maximus eu tellus. Proin in rhoncus lectus. Vivamus vel purus placerat, vestibulum lacus et, tempus lorem. Nam tincidunt congue bibendum. ',
            publishedDate: new Date('02-01-2025'),
            category: "Movies",
            author: 'Amanda Doe'
        },
        {
            id: '3',
            title: 'Article III',
            shortDescription: 'Proin in rhoncus lectus.',
            content: 'Aliquam cursus pharetra pulvinar. Etiam mauris eros, tempus vitae posuere at, maximus eu tellus. Proin in rhoncus lectus. Vivamus vel purus placerat, vestibulum lacus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper vestibulum pharetra. Pellentesque vulputate nisl et congue vehicula. Aliquam cursus pharetra pulvinar. Etiam mauris eros, tempus vitae posuere at, maximus eu tellus. Proin in rhoncus lectus. Vivamus vel purus placerat, vestibulum lacus et, tempus lorem. Nam tincidunt congue bibendum. ',
            publishedDate: new Date('02-02-2025'),
            category: "Sport",
            author: 'Thomas Smith'
        },
    ], 
    categories: [
        {
            id: '1',
            category: 'News'
        },
        {
            id: '2',
            category: 'Movies'
        },
        {
            id: '3',
            category: 'Sport'
        }
    ]
};

export default initialState;
export const mockFindAllQuery = `
  INSERT INTO post (id, title, body, published, created_at, modified_at) VALUES
  ('854a21e4-24e0-48c9-ad83-cac94ce5ea26', 'Lorem Ipsum 1', 'Lorem ipsum dolor sit amet 1, consectetur adipiscing elit.', 1, '${new Date().toISOString()}', '${new Date().toISOString()}'),
  ('244dadb6-4a96-4a47-9b6e-290839e1e155', 'Lorem Ipsum 2', 'Lorem ipsum dolor sit amet 2, consectetur adipiscing elit.', 0, '${new Date().toISOString()}', '${new Date().toISOString()}'),
  ('0c1e9055-de13-4985-bbd6-d7ed3b7c6137', 'Lorem Ipsum 3', 'Lorem ipsum dolor sit amet 3, consectetur adipiscing elit.', 1, '${new Date().toISOString()}', '${new Date().toISOString()}'),
  ('0bb5b6e1-bcda-4878-bc27-9c866f630d7b', 'Lorem Ipsum 4', 'Lorem ipsum dolor sit amet 4, consectetur adipiscing elit.', 0, '${new Date().toISOString()}', '${new Date().toISOString()}'),
  ('977135cd-c005-43dc-a489-33f2db96543b', 'Lorem Ipsum 5', 'Lorem ipsum dolor sit amet 5, consectetur adipiscing elit.', 1, '${new Date().toISOString()}', '${new Date().toISOString()}'),
  ('d486d574-d2df-4a85-bcd6-99b07b4c7653', 'Lorem Ipsum 6', 'Lorem ipsum dolor sit amet 6, consectetur adipiscing elit.', 1, '${new Date().toISOString()}', '${new Date().toISOString()}'),
  ('ba4dc8e6-3ad1-48e8-9b5d-3a9ad12c7ddc', 'Lorem Ipsum 7', 'Lorem ipsum dolor sit amet 7, consectetur adipiscing elit.', 0, '${new Date().toISOString()}', '${new Date().toISOString()}'),
  ('bd9a783c-ae08-4ca2-b1a0-29299e7e043d', 'Lorem Ipsum 8', 'Lorem ipsum dolor sit amet 8, consectetur adipiscing elit.', 1, '${new Date().toISOString()}', '${new Date().toISOString()}'),
  ('241e5a53-283a-4ec8-b079-f0734741ebf8', 'Lorem Ipsum 9', 'Lorem ipsum dolor sit amet 9, consectetur adipiscing elit.', 0, '${new Date().toISOString()}', '${new Date().toISOString()}'),
  ('2f34c181-2bad-4758-9551-394ebd30dbbc', 'Lorem Ipsum 10', 'Lorem ipsum dolor sit amet 10, consectetur adipiscing elit.', 1, '${new Date().toISOString()}', '${new Date().toISOString()}'),
  ('50fb7572-d961-45c8-a0e1-4a6605843489', 'Lorem Ipsum 11', 'Lorem ipsum dolor sit amet 11, consectetur adipiscing elit.', 1, '${new Date().toISOString()}', '${new Date().toISOString()}'),
  ('ce1bb50f-1101-4a03-a2ac-22381e8aa255', 'Lorem Ipsum 12', 'Lorem ipsum dolor sit amet 12, consectetur adipiscing elit.', 0, '${new Date().toISOString()}', '${new Date().toISOString()}'),
  ('3b4e4eb3-b4fe-4db5-bf52-f32a97638f8b', 'Lorem Ipsum 13', 'Lorem ipsum dolor sit amet 13, consectetur adipiscing elit.', 1, '${new Date().toISOString()}', '${new Date().toISOString()}'),
  ('9bec6f35-4db7-4f32-afa4-566515ec2af6', 'Lorem Ipsum 14', 'Lorem ipsum dolor sit amet 14, consectetur adipiscing elit.', 0, '${new Date().toISOString()}', '${new Date().toISOString()}')
`
/* eslint-disable @typescript-eslint/no-var-requires */

export const mockData = [
  {
    id: '836f29ac-9398-4d5c-bc05-e677ab8746b8',
    title: 'Lorem Ipsum',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    published: true,
  },
  {
    title: 'Suspendisse',
    body: 'Suspendisse potenti. Nulla facilisi.',
  },
  {
    title: 'Vivamus',
    body: 'Vivamus suscipit tortor eget felis porttitor volutpat.',
  },
  {
    title: 'Pellentesque',
    body: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
  {
    title: 'Fusce',
    body: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
  },
  {
    title: 'Aliquam',
    body: 'Aliquam erat volutpat. Ut ac suscipit lorem.',
  },
  {
    title: 'Integer',
    body: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
  },
  {
    title: 'Donec',
    body: 'Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.',
  },
  {
    title: 'Maecenas',
    body: 'Maecenas sed diam eget risus varius blandit sit amet non magna.',
  },
  {
    title: 'Cras',
    body: 'Cras mattis consectetur purus sit amet fermentum.',
  },
  {
    title: 'Aenean',
    body: 'Aenean lacinia bibendum nulla sed consectetur.',
  },
  {
    title: 'Duis',
    body: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
  },
  {
    title: 'Mauris',
    body: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
  },
  {
    title: 'Nulla',
    body: 'Nulla vitae elit libero, a pharetra augue.',
  },
  {
    title: 'Vestibulum',
    body: 'Vestibulum id ligula porta felis euismod semper.',
  },
  {
    title: 'Curabitur',
    body: 'Curabitur blandit tempus porttitor.',
  },
  {
    title: 'Nam',
    body: 'Nam eget dui. Etiam rhoncus.',
  },
  {
    title: 'Quisque',
    body: 'Quisque rutrum. Aenean imperdiet.',
  },
  {
    title: 'Nullam',
    body: 'Nullam quis risus eget urna mollis ornare vel eu leo.',
  },
  {
    title: 'Etiam',
    body: 'Etiam porta sem malesuada magna mollis euismod.',
  },
]

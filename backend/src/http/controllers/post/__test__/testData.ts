export const postListQuery = `
  INSERT INTO post (id, title, body, published, created_at, modified_at) VALUES
  ('854a21e4-24e0-48c9-ad83-cac94ce5ea26', 'Lorem Ipsum 1', 'Lorem ipsum dolor sit amet 1, consectetur adipiscing elit.', 1, '${new Date().toISOString()}', '${new Date().toISOString()}'),
  ('244dadb6-4a96-4a47-9b6e-290839e1e155', 'Lorem Ipsum 2', 'Lorem ipsum dolor sit amet 2, consectetur adipiscing elit.', 1, '${new Date().toISOString()}', '${new Date().toISOString()}'),
  ('0c1e9055-de13-4985-bbd6-d7ed3b7c6137', 'Lorem Ipsum 3', 'Lorem ipsum dolor sit amet 3, consectetur adipiscing elit.', 1, '${new Date().toISOString()}', '${new Date().toISOString()}'),
  ('0bb5b6e1-bcda-4878-bc27-9c866f630d7b', 'Lorem Ipsum 4', 'Lorem ipsum dolor sit amet 4, consectetur adipiscing elit.', 0, '${new Date().toISOString()}', '${new Date().toISOString()}'),
  ('977135cd-c005-43dc-a489-33f2db96543b', 'Lorem Ipsum 5', 'Lorem ipsum dolor sit amet 5, consectetur adipiscing elit.', 1, '${new Date().toISOString()}', '${new Date().toISOString()}'),
  ('d486d574-d2df-4a85-bcd6-99b07b4c7653', 'Lorem Ipsum 6', 'Lorem ipsum dolor sit amet 6, consectetur adipiscing elit.', 1, '${new Date().toISOString()}', '${new Date().toISOString()}'),
  ('ba4dc8e6-3ad1-48e8-9b5d-3a9ad12c7ddc', 'Lorem Ipsum 7', 'Lorem ipsum dolor sit amet 7, consectetur adipiscing elit.', 1, '${new Date().toISOString()}', '${new Date().toISOString()}'),
  ('bd9a783c-ae08-4ca2-b1a0-29299e7e043d', 'Lorem Ipsum 8', 'Lorem ipsum dolor sit amet 8, consectetur adipiscing elit.', 1, '${new Date().toISOString()}', '${new Date().toISOString()}'),
  ('241e5a53-283a-4ec8-b079-f0734741ebf8', 'Lorem Ipsum 9', 'Lorem ipsum dolor sit amet 9, consectetur adipiscing elit.', 0, '${new Date().toISOString()}', '${new Date().toISOString()}'),
  ('2f34c181-2bad-4758-9551-394ebd30dbbc', 'Lorem Ipsum 10', 'Lorem ipsum dolor sit amet 10, consectetur adipiscing elit.', 1, '${new Date().toISOString()}', '${new Date().toISOString()}'),
  ('50fb7572-d961-45c8-a0e1-4a6605843489', 'Lorem Ipsum 11', 'Lorem ipsum dolor sit amet 11, consectetur adipiscing elit.', 1, '${new Date().toISOString()}', '${new Date().toISOString()}'),
  ('ce1bb50f-1101-4a03-a2ac-22381e8aa255', 'Lorem Ipsum 12', 'Lorem ipsum dolor sit amet 12, consectetur adipiscing elit.', 1, '${new Date().toISOString()}', '${new Date().toISOString()}'),
  ('3b4e4eb3-b4fe-4db5-bf52-f32a97638f8b', 'Lorem Ipsum 13', 'Lorem ipsum dolor sit amet 13, consectetur adipiscing elit.', 1, '${new Date().toISOString()}', '${new Date().toISOString()}'),
  ('9bec6f35-4db7-4f32-afa4-566515ec2af6', 'Lorem Ipsum 14', 'Lorem ipsum dolor sit amet 14, consectetur adipiscing elit.', 0, '${new Date().toISOString()}', '${new Date().toISOString()}')
`

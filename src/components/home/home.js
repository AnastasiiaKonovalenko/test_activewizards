import React from 'react';
import './home.scss'

const Home = () => {
  return (
    <section className="main__text">
      <h2>Welcome!</h2>
      <article>
        <p className="main__paragraph">
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          "Нет никого, кто любил бы боль саму по себе, кто искал бы её и кто хотел бы иметь её просто потому, что это боль.."
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et felis suscipit, faucibus ante id, laoreet tortor.
          Aliquam eu nisi tincidunt lorem eleifend ultricies. Suspendisse interdum maximus sollicitudin. Aenean sit amet lacus magna.
          Curabitur cursus maximus neque, at dignissim erat luctus a. Morbi cursus sem magna, non pellentesque magna rhoncus eu.
          Mauris nec felis vel neque auctor pretium ut sit amet augue.
        </p>
        <p className="main__paragraph">
          Ut id lorem vitae nunc aliquam lacinia. Ut libero risus, lobortis vel vulputate vulputate, feugiat quis dolor.
          Pellentesque a mollis libero. Duis non fringilla sapien, quis congue sem. Quisque eget ante ultricies, volutpat est a,
          placerat lorem. Morbi pulvinar massa quis nisi aliquam egestas. Cras consequat felis ut egestas sodales. Nulla consectetur,
          eros non porta rhoncus, nisi leo dapibus tellus, at vulputate massa est quis felis.
        </p>
      </article>
    </section>
  );
};

export default Home;

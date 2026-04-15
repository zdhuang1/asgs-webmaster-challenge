import { useState } from 'react';
import styles from './Details.module.scss';
import NextIcon from '../SVGS/NextIcon';

export default function Details() {
  const detailsData = [
    {
      title: 'Food',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius eu metus et scelerisque. Nullam gravida eu elit at rutrum. Aliquam sit amet sollicitudin est. Suspendisse potenti. Donec porttitor tempor pulvinar. Sed congue elementum placerat. Maecenas nec rhoncus est.'
    },
    {
      title: 'Merch',
      content: 'Mauris vel nisl ante. Vivamus sagittis ullamcorper quam, sit amet tincidunt enim sollicitudin ut. Vestibulum at elementum leo. Aliquam erat volutpat. Nullam magna orci, accumsan at arcu lobortis, volutpat cursus nisl. Suspendisse metus purus, gravida vehicula eros in, malesuada posuere magna.'
    },
    {
      title: 'Attractions',
      content: 'Nulla ac dolor nibh. Vestibulum feugiat convallis posuere. Pellentesque vestibulum eleifend turpis vel consequat. Cras tempor turpis in nunc finibus sollicitudin. Morbi malesuada sodales urna, quis pulvinar nunc interdum ultrices. Nullam id risus velit. Ut fringilla eleifend mollis. Phasellus in dui tellus. Nam euismod mattis quam porttitor ornare.'
    },
    {
      title: 'Prizes',
      content: 'Integer tempor enim lacus, sit amet dapibus diam elementum et. Pellentesque congue libero id enim dignissim consequat. Fusce et sagittis magna, in feugiat felis. Sed volutpat, risus id ultricies blandit, arcu elit consectetur tellus, laoreet ornare purus nulla in ipsum. Praesent ac augue vitae turpis ullamcorper hendrerit eleifend in odio.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <div className={styles.details}>
        {detailsData.map((item, index) => (
          <div 
            key={index} 
            className={styles.gridItem} 
            data-open={openIndex === index}
          >
            <div className={styles.header} onClick={() => handleToggle(index)}>
              <h2>{item.title}</h2>
              <span className={styles.iconWrapper}>
                <NextIcon />
              </span>
            </div>
            
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
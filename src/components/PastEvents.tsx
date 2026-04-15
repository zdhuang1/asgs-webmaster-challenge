
import styles from './PastEvents.module.scss';

export default function PastEvents() {
  return (
    <section className={styles.pastEvents}>
      <h1>Past Events</h1>
      <div className={styles.eventsContainer}>
        
        <div className={styles.cardsWrapper}>
          
          {/* Card 1 */}
          <div className={styles.eventCard}>
            <div className={styles.cardImage}>
              <img src="src/assets/Event_ScoobyDoo.svg" alt="Event One Poster" />
            </div>
            <div className={styles.cardText}>
              <h3 className={styles.eventName}>ASCE-Bear, Where Are You?</h3>
              <p className={styles.eventDate}>November 21, 2025</p>
              <p className={styles.eventDesc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius eu metus et scelerisque. Nullam gravida eu elit at rutrum. Sed congue elementum placerat. Maecenas nec rhoncus est. 
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.eventCard}>
            <div className={styles.cardImage}>
              <img src="src/assets/Event_Minions.svg" alt="Event Two Poster" />
            </div>
            <div className={styles.cardText}>
              <h3 className={styles.eventName}>The Rise of ASCE Bear</h3>
              <p className={styles.eventDate}>February 20, 2026</p>
              <p className={styles.eventDesc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius eu metus et scelerisque. Nullam gravida eu elit at rutrum. Sed congue elementum placerat. Maecenas nec rhoncus est. 
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.eventCard}>
            <div className={styles.cardImage}>
              <img src="src/assets/Event_MyLittlePony.svg" alt="Event Three Poster" />
            </div>
            <div className={styles.cardText}>
              <h3 className={styles.eventName}>My Little ASCE Bear</h3>
              <p className={styles.eventDate}>April 3, 2026</p>
              <p className={styles.eventDesc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius eu metus et scelerisque. Nullam gravida eu elit at rutrum. Sed congue elementum placerat. Maecenas nec rhoncus est. 
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
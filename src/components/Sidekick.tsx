import styles from './Sidekick.module.scss';

export default function Sidekick() {
  return (
    <section>
      <div className={styles.sideKick}>
        <p className={styles.mainText}>
          Bear Gardens are daytime carnivals where students can chill with free food and play games to win some bear-y cool prizes with our mascot, ASCE Bear. 
        </p>
        <p className={styles.subtext}>As a play on “Biergarten”, Bear Garden serves free beer to students over 21 who present a valid ID, but the fun is open to all UCSD undergraduate students! Each Bear Garden also has a special theme with exclusive, themed stickers and merchandise. Come out for a paw-some time!</p>
      </div>
    </section>
  );
}
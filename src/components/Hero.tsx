import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <section>
      <div className={styles.hero}>
        <img src="src/assets/Hero_ScoobyDoo.svg" className={styles.image}></img>
      </div>
    </section>
  )
}
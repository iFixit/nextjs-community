import utilStyles from '../../styles/utils.module.css'
import OptionsDisplay from './options';
import VideoDisplay from './video';

export default function InfoDisplay() {
    return (
        <section className={utilStyles.section}>
          <OptionsDisplay />
          <VideoDisplay />
        </section>
    )
}
  
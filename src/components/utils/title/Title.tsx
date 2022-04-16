import styles from 'components/utils/title/Title.module.scss'

const Title = ({label}: {label: string}) => (
	<div className={styles.wrapper}>
		<b>{label}</b>
	</div>
)

export default Title

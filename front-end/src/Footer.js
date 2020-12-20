
/** @jsx jsx */
import { jsx } from '@emotion/core'

const styles = {
  footer: {
    height: '30px',
    backgroundColor: 'rgba(255,255,255,.3)',
    flexShrink: 0,
    textAlign: 'center',
  },
}

export default () => {
  return (
    <footer style={styles.footer}>
      Application developped by Jean de Malliard & Lucas Rietsch, ECE Paris, 2020
    </footer>
  );
}

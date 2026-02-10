import { Box } from "@mui/material";
import styles from "./styles.module.scss";

const Loader = () => {
  return (
    <Box className={styles.container_loader} data-testid="loader">
      <div className={styles.loader}></div>
    </Box>
  );
};

export default Loader;

import { Box, Skeleton, Stack } from "@mui/material";

const SkeletonLoader = () => {
  return (
    <Stack
      spacing={1}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Skeleton variant="text" sx={{ fontSize: "38px", width: "200px" }} />

      <Box
        sx={{
          display: "flex",
          gap: 2,
          width: "100%",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Skeleton
          variant="rectangular"
          height={200}
          sx={{ width: { xs: "100%", sm: "25%" } }}
        />
        <Skeleton
          variant="rectangular"
          height={200}
          sx={{ width: { xs: "100%", sm: "25%" } }}
        />
        <Skeleton
          variant="rectangular"
          height={200}
          sx={{ width: { xs: "100%", sm: "25%" } }}
        />
        <Skeleton
          variant="rectangular"
          height={200}
          sx={{ width: { xs: "100%", sm: "25%" } }}
        />
      </Box>
    </Stack>
  );
};

export default SkeletonLoader;

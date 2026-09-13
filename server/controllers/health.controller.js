// Keep response logic in a controller so routes stay small and readable.
export function getHealth(_request, response) {
  response.status(200).json({
    success: true,
    message: "ZOOMALADE backend is running",
  });
}

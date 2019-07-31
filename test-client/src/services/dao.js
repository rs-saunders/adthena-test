const GET = async (options) => {
  const response = await fetch(options);
  return await response.json();
};

export default {
  GET,
};

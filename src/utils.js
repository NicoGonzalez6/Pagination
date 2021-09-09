const paginate = (followers) => {
  const itemsPerPage = 10;
  const Pages = Math.ceil(followers.length / itemsPerPage);

  const newFollowers = Array.from({ length: Pages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });
  return newFollowers;
};

export default paginate;

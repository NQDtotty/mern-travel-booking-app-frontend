const calculateAvgRating = reviews => {
    const totalReviews = reviews?.length;
    const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);
    const avgRating = totalRating === 0 ? "" : totalRating === 1 ? totalRating : (totalRating / reviews?.length).toFixed(1);

    return { totalReviews, avgRating }
}

export default calculateAvgRating;
const calculateAvgRating = reviews => {
    const totalReviews = reviews?.length;
    const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);
    const avgRating = totalReviews === 0 ? "" : totalReviews === 1 ? totalRating.toFixed(1) : (totalRating / totalReviews).toFixed(1);

    return { totalReviews, avgRating }
}

export default calculateAvgRating;
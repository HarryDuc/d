import React from "react";
import Course from "./Course";
import { useGetPurchasedCoursesQuery } from "@/features/api/purchaseApi";

const MyLearning = () => {
  const { data, isLoading } = useGetPurchasedCoursesQuery();
  console.log("Purchased courses data:", data);

  const purchasedCourses = data?.purchasedCourses || [];

  return (
    <div className="max-w-4xl mx-auto my-10 px-4 md:px-0">
      <h1 className="font-bold text-2xl">KHÓA HỌC CỦA TÔI</h1>
      <div className="my-5">
        {isLoading ? (
          <MyLearningSkeleton />
        ) : purchasedCourses.length === 0 ? (
          <p>Bạn chưa đăng ký khóa học nào.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {purchasedCourses.map((course) => (
              <Course key={course._id} course={course}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyLearning;

// Skeleton component for loading state
const MyLearningSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {[...Array(3)].map((_, index) => (
      <div
        key={index}
        className="bg-gray-300 dark:bg-gray-700 rounded-lg h-40 animate-pulse"
      ></div>
    ))}
  </div>
);

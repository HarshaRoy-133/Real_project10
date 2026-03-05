import React from "react";

export default function App() {
  const subjects = [
    { name: "Data Structures", percent: 85 },
    { name: "Operating Systems", percent: 72 },
    { name: "Database Systems", percent: 55 },
    { name: "Computer Networks", percent: 90 },
    { name: "Software Engineering", percent: 65 }
  ];

  const studentInfo = {
    name: "M. Sree Harsha",
    registerNo: "2500031608",
    department: "Computer Science"
  };

  const getStatusStyles = (percent) => {
    if (percent >= 75) {
      return {
        bgColor: "bg-green-50",
        borderColor: "border-green-500",
        badgeBg: "bg-green-200",
        badgeText: "text-green-800",
        progressBg: "bg-green-500",
        badge: "Excellent"
      };
    }
    if (percent >= 60) {
      return {
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-500",
        badgeBg: "bg-yellow-200",
        badgeText: "text-yellow-800",
        progressBg: "bg-yellow-500",
        badge: "Average"
      };
    }
    return {
      bgColor: "bg-red-50",
      borderColor: "border-red-500",
      badgeBg: "bg-red-200",
      badgeText: "text-red-800",
      progressBg: "bg-red-500",
      badge: "Low Attendance"
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold mb-6">University Attendance Portal</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <span className="text-blue-200 text-sm font-semibold">NAME</span>
              <p className="text-xl font-semibold">{studentInfo.name}</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-blue-200 text-sm font-semibold">REGISTER NO</span>
              <p className="text-xl font-semibold">{studentInfo.registerNo}</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-blue-200 text-sm font-semibold">DEPARTMENT</span>
              <p className="text-xl font-semibold">{studentInfo.department}</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-slate-800 mb-2">Subject Attendance Overview</h2>
          <p className="text-slate-600">Track your attendance across all registered subjects</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => {
            const styles = getStatusStyles(subject.percent);

            return (
              <div
                key={index}
                className={`${styles.bgColor} ${styles.borderColor} border-2 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300`}
              >
                {/* Subject Name */}
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {subject.name}
                </h3>

                {/* Attendance Percentage */}
                <div className="mb-4">
                  <p className="text-4xl font-bold text-slate-800 inline-block">
                    {subject.percent}
                    <span className="text-lg text-slate-600">%</span>
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="w-full bg-slate-300 rounded-full h-3 overflow-hidden">
                    <div
                      className={`${styles.progressBg} h-full rounded-full transition-all duration-500`}
                      style={{ width: `${subject.percent}%` }}
                    ></div>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="flex items-center justify-between">
                  <span className={`${styles.badgeBg} ${styles.badgeText} px-4 py-2 rounded-full text-sm font-semibold`}>
                    {styles.badge}
                  </span>
                  {subject.percent >= 75 ? (
                    <span className="text-green-600 text-2xl">✓</span>
                  ) : subject.percent >= 60 ? (
                    <span className="text-yellow-600 text-2xl">⚠</span>
                  ) : (
                    <span className="text-red-600 text-2xl">✕</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Attendance Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-100 rounded-lg p-4 border-l-4 border-green-500">
              <p className="text-green-900 font-semibold text-sm">Excellent</p>
              <p className="text-3xl font-bold text-green-700">
                {subjects.filter(s => s.percent >= 75).length}
              </p>
              <p className="text-green-700 text-sm">Above 75%</p>
            </div>
            <div className="bg-yellow-100 rounded-lg p-4 border-l-4 border-yellow-500">
              <p className="text-yellow-900 font-semibold text-sm">Average</p>
              <p className="text-3xl font-bold text-yellow-700">
                {subjects.filter(s => s.percent >= 60 && s.percent < 75).length}
              </p>
              <p className="text-yellow-700 text-sm">60–75%</p>
            </div>
            <div className="bg-red-100 rounded-lg p-4 border-l-4 border-red-500">
              <p className="text-red-900 font-semibold text-sm">Low</p>
              <p className="text-3xl font-bold text-red-700">
                {subjects.filter(s => s.percent < 60).length}
              </p>
              <p className="text-red-700 text-sm">Below 60%</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
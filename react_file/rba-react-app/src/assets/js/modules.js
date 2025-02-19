function filterCourses(category) {
  const courses = document.querySelectorAll('.course-card');
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[onclick="filterCourses('${category}')"]`).classList.add('active');

  courses.forEach(course => {
    course.style.display = (category === 'all' || course.dataset.category.includes(category)) ? 'block' : 'none';
  });
}

function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
  goToPrevious,
  goToNext,
}) {
  return (
    <div className="pagination">

      <div className="page-numbers">
        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .map((page) => (
            <button
              key={page}
              className={currentPage === page ? "active" : ""}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
      </div>


      <div className="page-nav">
        <button
          onClick={goToPrevious}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <button
          onClick={goToNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

    </div>
  );
}

export default Pagination;
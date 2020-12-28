import React, { useState, useEffect } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

function Paginations({
  currentPage,
  maximumPage,
  howManyOnePage,
  qry,
  adminUserList,
}) {
  var url = adminUserList ? "adminusermanagement?" : "usermanagement?";
  if (qry.type) {
    if (url === "adminusermanagement?" || url === "usermanagement?") {
      url = url + "type=" + qry.type + "&search=";
    }
    if (qry.search) {
      url = url + qry.search;
    }
  }
  function Paging({ index }) {
    if (currentPage >= 3) {
      var currentIndex = currentPage - 2;
      currentIndex = currentIndex + index;
    } else {
      var currentIndex = 1;
      currentIndex = currentIndex + index;
    }

    return currentIndex <= MaximumPageNum ? (
      <PaginationItem
        className={CurrentPageNum === currentIndex ? "active" : ""}
      >
        <PaginationLink
          href={
            url +
            (url === "adminusermanagement?" || url === "usermanagement?"
              ? "page="
              : "&page=") +
            currentIndex
          }
          // onClick={(e) => e.preventDefault()}
        >
          {currentIndex}
        </PaginationLink>
      </PaginationItem>
    ) : null;
  }

  // 페이징할때 필요한것들 전부 초기화하기
  // console.log(currentPage, maximumPage);
  useEffect(() => {
    //최초 1번만 실행되는 곳
    // console.log(MaximumPageNum);
    // console.log(qry);
    // console.log(currentPage, maximumPage, howManyOnePage);
  }, []);

  //최대 페이지 수(maximum = 9)
  const [MaximumPageNum, setMaximumPageNum] = useState(
    Math.ceil(maximumPage / howManyOnePage)
  );

  //최소 페이지 수(minimum = 1)
  const [MinimumPageNum, setMinimumPageNum] = useState(1);

  //현재 페이지 값
  const [CurrentPageNum, setCurrentPageNum] = useState(parseInt(currentPage));

  return (
    <>
      <Pagination>
        <PaginationItem>
          <PaginationLink
            aria-label="Previous"
            href={
              url +
              (url === "adminusermanagement?" || url === "usermanagement?"
                ? "page="
                : "&page=") +
              (currentPage - 5 <= 1 ? 1 : currentPage - 5)
            }
          >
            <span aria-hidden={true}>
              <i aria-hidden={true} className="fa fa-angle-double-left"></i>
            </span>
          </PaginationLink>
        </PaginationItem>

        {[...Array(5)].map((x, i) => (
          <Paging key={i} index={i} />
        ))}

        <PaginationItem>
          <PaginationLink
            aria-label="Next"
            href={
              url +
              (url === "adminusermanagement?" || url === "usermanagement?"
                ? "page="
                : "&page=") +
              (currentPage + 5 >= MaximumPageNum
                ? MaximumPageNum
                : currentPage + 5)
            }
          >
            <span aria-hidden={true}>
              <i aria-hidden={true} className="fa fa-angle-double-right"></i>
            </span>
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    </>
  );
}

export default Paginations;

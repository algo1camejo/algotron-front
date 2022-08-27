import { FC } from 'react';
import PaginationUI from 'react-bootstrap/Pagination';

export type PaginationProps = {
  totalPages: number;
  page: number;
  min?: number;
  max?: number;
  onFirst?: () => void;
  onPrev?: () => void;
  onSelect?: (page: number) => void;
  onNext?: () => void;
  onLast?: () => void;
};

export const Pagination: FC<PaginationProps> = (props) => {
  const {
    totalPages,
    page,
    min = 2,
    max = null,
    onFirst,
    onPrev,
    onSelect = () => null,
    onNext,
    onLast,
  } = props;

  if(totalPages < min) return null;

  let items = [];
  let first = 1;
  let last = totalPages;

  if(max) {
    const totalPrevItems = page - Math.floor(max/2);
    const totalNextItems = page + Math.ceil(max/2);

    first = totalPrevItems > 0 ? totalPrevItems : 1;
    last = totalNextItems < totalPages ? totalNextItems : totalPages;

    const total = last - first + 1;

    if(total < max) {
      if(first > 1) {
        first -= (max - total);
      }
      else if(last < totalPages) {
        last += (max - total);
      }
    }
    else {
      if(last > 1) {
        last -= (total - max);
      }
    }
  }

  for (let i = first; i <= last; i++) {
    items.push(
      <PaginationUI.Item
        key={i}
        active={i === page}
        onClick={() => onSelect(i)}
      >
        {i}
      </PaginationUI.Item>,
    );
  }

  return (
    <PaginationUI>
      {onFirst && (
        <PaginationUI.First
          disabled={page === 1}
          onClick={onFirst}
        />
      )}
      {onPrev && (
        <PaginationUI.Prev
          disabled={page === 1}
          onClick={onPrev}
        />
      )}
      {items}
      {onNext && (
        <PaginationUI.Next
          disabled={page === totalPages}
          onClick={onNext}
        />
      )}
      {onLast && (
        <PaginationUI.Last
          disabled={page === totalPages}
          onClick={onLast}
        />
      )}
    </PaginationUI>
  );
};

export default Pagination;

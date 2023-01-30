import { useState } from 'react';

import Pagination from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
};

export const Default = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <div>
      <Pagination
        total={120}
        limit={10}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

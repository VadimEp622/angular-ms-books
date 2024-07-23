import { APIBooksByGenre, APIBooksBySearch } from './api.model';
import { BookListDataType, ListType, PreviewType } from './types.model';

// export interface BookListProps {
//   data: APIBooksByGenre | APIBooksBySearch;
//   dataType: BookListDataType;
//   listType: ListType;
//   previewType: PreviewType;
// }

export interface BookListProps<T extends APIBooksByGenre | APIBooksBySearch> {
  data: T;
  dataType: BookListDataType;
  listType: ListType;
  previewType: PreviewType;
}

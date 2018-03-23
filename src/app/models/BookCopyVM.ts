export interface BookCopyVM {
  copy_id: number;
  ISBN: number;
  copy_title: string;
  isBorrowed: boolean;
  bookcopy_borrowId: number;
  bookcopy_parentId: number;
  bookcopy_bookbasketId: number;
}

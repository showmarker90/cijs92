LESSON 8 : Side Effect vs useEffect

8.1 : Side effect la gi?

- tác vụ nằm ngoài khả năng của component

  8.2 : useEffect

  syntax :

  - useEffect(cb,[array dependencies])

  - useEffect(() => {
    },[])

  KL : - cb duoc goi dong thoi voi qua trinh render component lan dau tien - cb dc goi lai neu component re-render (KHONG CO ARRAY DEPENDENCIES) - nếu có tham số thứ 2, cb đc gọi khi render lần đầu, và array dependencies thay đổi

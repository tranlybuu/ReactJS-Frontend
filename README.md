# ReactJS

- NPM
    + Project scope: cài thư viện vào dự án cụ thể
        - npm install react react-dom --save  =>  dependencies
        - npm i react react-dom  =>  dependencies

        - npm install --save-dev react react-dom  =>  devDependencies
        - npm i -D react react-dom  =>  devDependencies

        - npm uninstall react react-dom

    + Global scope: cài thư viện vào máy tính
        - npm i --global create-react-app
        - npm i -g create-react-app

        - npm uninstall -g create-react-app

- NPX: cài NodeJS => cài NPM, NPX
    + Tại sao dùng NPX?
        - Tìm kiếm thư viện trong Project scope và Global scope để chạy, nếu không có thì sẽ tự động tìm kiếm trên NPM để cài đặt và chạy
        - Luôn sử dụng bản mới nhất của thư viện
    + Gặp lỗi khi: npx create-react-app tiktok
        - Lỗi đặt tên file => viết tên tiếng việt, có dấu cách,...
        - Đặt tên không dấu, cách nhau bằng dấu gạch ngang

- So sánh YARN & NPM
    + Đều là Package Manager
    + NPM = Node Package Manager:
        - Cung cấp 1 website để quản lý các thư viện
        - Đăng ký truy cập vào cơ sở dữ liệu công khai rộng rãi của các gói JavaScript
        - Giao tiếp với NPM qua dòng lệnh
    + YARN = Yet Another Resource Negotiator:
        - Cải thiện những hạn chế của NPM như tốc độ, bảo mật
    + YARN > NPM -- Tốc độ -- Khi cài nhiều thư viện cùng một lúc thì NPM sẽ cài tuần tự các thư viện còn YARN sẽ cài song song nhiều thư viện nhưng tốn dung lượng hơn vì YARN lưu trữ Cache giúp việc đồng bộ hay cài lại Node_Module

- YARN install
    + npm i -g yarn

- Lưu ý:
    + Luôn bật development server (npm start || yarn start)

Syntax: 
    https://dev.to/samithawijesekara/the-difference-between-npm-and-yarn-2j3p#:~:text=The%20main%20difference%20between%20NPM,perform%20a%20serial%20installation%20process.

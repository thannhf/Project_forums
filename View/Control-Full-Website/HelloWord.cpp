// đã cài dev-c++, chỉ cần code trên idle này sau đó chạy trên idle này sau đó lấy file exe sau khi chạy và import vào php
// xử lý ảnh với c++ 17 và openCV dùng cấu trúc dữ liệu stack LIFO để xử lý ảnh từ folder ảnh từ máy chủ
#include <iostream>
#include <filesystem>
#include <stack>
#include <opencv2/opencv.hpp>
namespace fs = std::filesystem;

int main() {
    std::stack<std::string> imageStack;

    // Duyệt qua thư mục và đẩy các ảnh vào stack
    std::string folder = "path/to/images";
    for (const auto& entry : fs::directory_iterator(folder)) {
        if (entry.path().extension() == ".jpg" || entry.path().extension() == ".png") {
            imageStack.push(entry.path().string());
        }
    }

    // Xử lý từng ảnh một
    while (!imageStack.empty()) {
        std::string imagePath = imageStack.top();
        imageStack.pop();

        // Đọc ảnh với OpenCV
        cv::Mat image = cv::imread(imagePath);
        if (image.empty()) {
            std::cerr << "Error loading image: " << imagePath << std::endl;
            continue;
        }

        // Xử lý ảnh (ví dụ: convert to grayscale)
        cv::Mat grayImage;
        cv::cvtColor(image, grayImage, cv::COLOR_BGR2GRAY);

        // Lưu ảnh đã xử lý
        cv::imwrite("path/to/processed/" + fs::path(imagePath).filename().string(), grayImage);
    }

    return 0;
#include<conio.h>//khai báo thư viện conio.h. Thư viện conio.h cung cấp các hàm và macro để tương tác với màn hình console
#include<stdio.h>//khai báo thư viện stdio.h. Thư viện stdio.h cung cấp các hàm và macro để thực hiện input và output chuẩn (standard input/output)
#include <iostream>//khai báo thư viện iostream. Thư viện iostream cung cấp các hàm và đối tượng để thực hiện input và output chuẩn (standard input/output)
#include <string.h>//khai báo thư viện string.h. Thư viện string.h cung cấp các hàm và macro để thao tác với các chuỗi ký tự
#define MAX 100//định nghĩa một hằng số với tên MAX và giá trị là 100, tiện lợi cho việc sử dụng biến sau này
using namespace std;//đưa toàn bộ không gian tên std vào phạm vi hiện tại của chương trình

struct SinhVien {//định nghĩa một kiểu dữ liệu có cấu trúc (struct) có tên là SinhVien. Một struct là một kiểu dữ liệu tùy chỉnh, được sử dụng để lưu trữ các biến có kiểu dữ liệu khác nhau ở một đối tượng duy nhất.
    int id;//khai báo đối tượng id kiểu số nguyên
    char ten[30];//khai báo đối tượng ten kiểu ký tự giới hạn 30 ký tự
    char gioiTinh[5];//khai báo đối tượng gioitinh kiểu ký tự giới hạn 5 ký tự
    int tuoi;//khai báo đối tượng tuoi kiểu số nguyên
    float diemToan;//khai báo đối tượng diemtoan kiểu float
    float diemLy;//khai báo đối tượng diemly kiểu float
    float diemHoa;//khai báo đối tượng diemhoa kiểu float
    float diemTB = 0;//khai báo đối tượng diemTB kiểu float gán giá trị bằng 0
    char hocluc[10] = "-";//khai báo điểm hocluc kiểu ký tự 
};

typedef SinhVien SV;//sử dụng typedef tạo một bí danh(biến) cho struct sinhvien, tiện lợi cho việc sử dụng biến sau này

void printLine(int n);//khai báo một phương thức kiểu void lấy một tham số n kiểu số nguyên
void nhapThongTinSV(SV &sv, int id);//khai báo một phương thức kiểu void lấy một tham số là địa chỉ &sv cho bí danh typedef SV, một tham số là id kiểu số nguyên
void nhapSV(SV a[], int id, int n);//khai báo một phương thức kiểu void lấy một tham số là mảng có kiểu dữ liệu là cấu trúc SV, một tham số là id kiểu số nguyên, một tham số là n kiểu số nguyên
void capNhatThongTinSV(SV &sv);//khai báo một phương thức kiểu void lấy một tham số là biến địa chỉ tham chiếu của SV
void capNhatSV(SV a[], int id, int n);//khai báo một phương thức kiểu void lấy một tham số là mảng có kiểu dữ liệu là cấu trúc SV, một tham số là id kiểu int, một tham số là n kiểu int
int xoaTheoID(SV a[], int id, int n);//khai báo một phương thức kiểu void lấy một tham số là mảng có kiểu dữ liệu là cấu trúc SV, một tham số là id kiểu số nguyên, một tham số là n kiểu số nguyên
void timKiemTheoTen(SV a[], char ten[], int n);////khai báo một phương thức kiểu void lấy một tham số là mảng có kiểu dữ liệu là cấu trúc SV, một tham số là một mảng kiểu ký tự, một tham số n kiểu số nguyên
void tinhDTB(SV &sv);//khai báo một phương thức kiểu void lấy một tham số là địa chỉ tham chiếu của SV
void xeploai(SV &sv);//khai báo một phương thức kiểu void lấy một tham số là địa chỉ tham chiếu của SV
int idLonNhat(SV a[], int n);//khai báo một phương thức kiểu void lấy một tham số là mảng có kiểu dữ liệu là cấu trúc SV, một tham số là n kiểu số nguyên
void sapxepTheoDTB(SV a[], int n);//khai báo một phương thức kiểu void lấy một tham số là mảng có kiểu dữ liệu là cấu trúc SV, một tham số là n kiểu số nguyên
void sapXepTheoTen(SV a[], int n);//khai báo một phương thức kiểu void lấy một tham số là mảng có kiểu dữ liệu là cấu trúc SV, một tham số là n kiểu số nguyên
void showStudent(SV a[], int n);//khai báo một phương thức kiểu void lấy một tham số là mảng có kiểu dữ liệu là cấu trúc SV, một tham số là n kiểu số nguyên
int docFile(SV a[], char fileName[]);//khai báo một phương thức kiểu void lấy một tham số là mảng có kiểu dữ liệu là cấu trúc SV, một tham số là một mảng kiểu ký tự
void ghiFile(SV a[], int n, char fileName[]);//khai báo một phương thức kiểu void lấy một tham số là mảng có kiểu dữ liệu là cấu trúc SV, một tham số n kiểu số nguyên, một tham số là một mảng kiểu ký tự
void pressAnyKey();//khai báo một phương thức kiểu void

int main() {//khai báo phương thức main kiểu số nguyên
    int key;//khai báo một biến kiểu số nguyên
    char fileName[] = "sinhvien.txt";//khai báo một mảng kiểu ký tự với giá trị là một file txt
    SV arraySV[MAX];//mảng arraySV chứa tối đa MAX là một định nghĩa define được tham chiếu đến giá trị được khai báo ở trên, tham chiếu đến SV 
    int soluongSV = 0;//khai báo một biến kiểu số nguyên gán giá trị 0
    int idCount = 0;//khai báo một biến kiểu số nguyên gán giá trị 0
    
    // nhap danh sach sinh vien tu file
    soluongSV = docFile(arraySV, fileName);//gán giá trị trả về của hàm docFile cho biến soluongSV, hàm docFile đọc dữ liệu từ fileName vào mảng arraySV
    idCount = idLonNhat(arraySV, soluongSV);//gán giá trị trả về của hàm idLonNhat cho biến idCount, tìm id lớn nhất trong mảng arraySV và soluongSV 

    while(true) {//tạo một vòng lặp với điều kiện là luôn đúng
        //hiển thị thông báo/thông tin
        cout << "CHUONG TRINH QUAN LY SINH VIEN C/C++\n";
        cout << "*************************MENU**************************\n";
        cout << "**  1. Them sinh vien.                               **\n";
        cout << "**  2. Cap nhat thong tin sinh vien boi ID.          **\n";
        cout << "**  3. Xoa sinh vien boi ID.                         **\n";
        cout << "**  4. Tim kiem sinh vien theo ten.                  **\n";
        cout << "**  5. Sap xep sinh vien theo diem trung binh (GPA). **\n";
        cout << "**  6. Sap xep sinh vien theo ten.                   **\n";
        cout << "**  7. Hien thi danh sach sinh vien.                 **\n";
        cout << "**  8. Ghi danh sach sinh vien vao file.             **\n";
        cout << "**  0. Thoat                                         **\n";
        cout << "*******************************************************\n";
        cout << "Nhap tuy chon: ";
        cin >> key;//lấy data từ user
        switch(key){//tạo switch case xử lý các điều kiện là data user nhập vào
            case 1://nếu đầu vào user nhập là 1
                cout << "\n1. Them sinh vien.";//hiển thị thông báo
                idCount++;//cộng một giá trị idCount
                nhapSV(arraySV, idCount, soluongSV);//gọi hàm nhapSV với 3 tham số với đối số là dữ liệu từ các file lưu trữ
                printf("\nThem sinh vien thanh cong!");//hiển thị thông báo
                soluongSV++;//sau khi thêm thành công thì data trong file sinh viên thêm 1 người
                pressAnyKey();//gọi hàm pressAnyKey trở lại trình màn hình console 
                break;//dừng thoát điều kiện
            case 2://nếu đầu vào user nhập là 2
                if(soluongSV > 0) {//nếu soluongSV trong file > 0 thì
                    int id;//khai báo biến id kiểu số nguyên
                    cout << "\n2. Cap nhat thong tin sinh vien. ";//hiển thị thông báo
                    cout << "\n Nhap ID: "; cin >> id;//hiển thị thông báo và lấy dữ liệu update mới từ người dùng cho id cụ thể
                    capNhatSV(arraySV, id, soluongSV);//gọi hàm capNhatSV với 3 tham số và các đối số là data trong các file
                }else{//nếu ngược lại thì
                    cout << "\nSanh sach sinh vien trong!";//hiển thị thông báo
                }
                pressAnyKey();//gọi hàm pressAnyKey trở lại màn hình console
                break;//dừng thoát điều kiện
            case 3://nếu đầu vào user nhập là 3
                if(soluongSV > 0) {
                    int id;
                    cout << "\n3. Xoa sinh vien.";
                    cout << "\n Nhap ID: "; cin >> id;
                    if (xoaTheoID(arraySV, id, soluongSV) == 1) {
                        printf("\nSinh vien co id = %d da bi xoa.", &id);
                        soluongSV--;
                    }
                }else{
                    cout << "\nSanh sach sinh vien trong!";
                }
                pressAnyKey();
                break;
            case 4:
                if(soluongSV > 0) {
                    cout << "\n4. Tim kiem sinh vien theo ten.";
                    char strTen[30];
                    cout << "\nNhap ten de tim kiem: "; fflush(stdin); gets(strTen);
                    timKiemTheoTen(arraySV, strTen, soluongSV);
                }else{
                    cout << "\nSanh sach sinh vien trong!";
                }
                pressAnyKey();
                break;
            case 5:
                if(soluongSV > 0) {
                    cout << "\n5. Sap xep sinh vien theo diem trung binh (GPA).";
                    sapxepTheoDTB(arraySV, soluongSV);
                    showStudent(arraySV, soluongSV);
                }else{
                    cout << "\nSanh sach sinh vien trong!";
                }
                pressAnyKey();
                break;
            case 6:
                if(soluongSV > 0) {
                    cout << "\n6. Sap xep sinh vien theo ten.";
                    sapXepTheoTen(arraySV, soluongSV);
                    showStudent(arraySV, soluongSV);
                } else {
                    cout << "\nSanh sach sinh vien trong!";
                }
                pressAnyKey();
                break;
            case 7:
                if(soluongSV > 0){
                    cout << "\n7. Hien thi danh sach sinh vien.";
                    showStudent(arraySV, soluongSV);
                }else{
                    cout << "\nSanh sach sinh vien trong!";
                }
                pressAnyKey();
                break;
            case 8:
                if(soluongSV > 0){
                    cout << "\n8. Ghi danh sach sinh vien vao file.";
                    ghiFile(arraySV, soluongSV, fileName);
                }else{
                    cout << "\nSanh sach sinh vien trong!";
                }
                printf("\nGhi danh sach sinh vien vao file %s thanh cong!", fileName);
                pressAnyKey();
                break;
            case 0:
                cout << "\nBan da chon thoat chuong trinh!";
                getch();
                return 0;
            default:
                cout << "\nKhong co chuc nang nay!";
                cout << "\nHay chon chuc nang trong hop menu.";
                pressAnyKey();
                break;
        }
    }
}
 
void tinhDTB(SV &sv) {
    sv.diemTB = (sv.diemToan + sv.diemLy + sv.diemHoa) / 3;    
}

void xeploai(SV &sv) {
    if(sv.diemTB >= 8) strcpy(sv.hocluc, "Gioi");
    else if(sv.diemTB >= 6.5) strcpy(sv.hocluc, "Kha");
    else if(sv.diemTB >= 5) strcpy(sv.hocluc, "Trung binh");
    else strcpy(sv.hocluc, "Yeu");
}
 
void nhapThongTinSV(SV &sv, int id) {
    cout << "\n Nhap ten: "; fflush(stdin); gets(sv.ten);
    cout << " Nhap gioi tinh: "; gets(sv.gioiTinh);
    cout << " Nhap tuoi: "; cin >> sv.tuoi;
    cout << " Nhap diem Toan: "; cin >> sv.diemToan;
    cout << " Nhap diem Ly: "; cin >> sv.diemLy;
    cout << " Nhap diem Hoa: "; cin >> sv.diemHoa;
    sv.id = id;
    tinhDTB(sv);
    xeploai(sv);
}

void nhapSV(SV a[], int id, int n) {
    printLine(40);
    printf("\n Nhap sinh vien thu %d:", n + 1);
    nhapThongTinSV(a[n], id);
    printLine(40);
}

void capNhatThongTinSV(SV &sv) {
    cout << "\n Nhap ten: "; fflush(stdin); gets(sv.ten);
    cout << " Nhap gioi tinh: "; gets(sv.gioiTinh);
    cout << " Nhap tuoi: "; cin >> sv.tuoi;
    cout << " Nhap diem Toan: "; cin >> sv.diemToan;
    cout << " Nhap diem Ly: "; cin >> sv.diemLy;
    cout << " Nhap diem Hoa: "; cin >> sv.diemHoa;
    tinhDTB(sv);
    xeploai(sv);
}

void capNhatSV(SV a[], int id, int n) {
    int found = 0;
    for(int i = 0; i < n; i++) {
        if (a[i].id == id) {
            found = 1;
            printLine(40);
            cout << "\n Cap nhat thong tin sinh vien co ID = " << id;
            capNhatThongTinSV(a[i]);
            printLine(40);
            break;
        }
    }
    if (found == 0) {
        printf("\n Sinh vien co ID = %d khong ton tai.", id);
    }
}

int xoaTheoID(SV a[], int id, int n) {
    int found = 0;
    for(int i = 0; i < n; i++) {
        if (a[i].id == id) {
            found = 1;
            printLine(40);
            for (int j = i; j < n; j++) {
                a[j] = a[j+1];
            }
            cout << "\n Da xoa SV co ID = " << id;
            printLine(40);
            break;
        }
    }
    if (found == 0) {
        printf("\n Sinh vien co ID = %d khong ton tai.", id);
        return 0;
    } else {
        return 1;
    }
}

void timKiemTheoTen(SV a[], char ten[], int n) {
    SV arrayFound[MAX];
    char tenSV[30];
    int found = 0;
    for(int i = 0; i < n; i++) {
        strcpy(tenSV, a[i].ten);
        if(strstr(strupr(tenSV), strupr(ten))) {
            arrayFound[found] = a[i];
            found++;
        }
    }
    showStudent(arrayFound, found);
}

void showStudent(SV a[], int n) {
    printLine(100);
    cout <<"\n\STT\tID\tHo va ten\tGioi tinh\tTuoi\tToan\tLy\tHoa\tDiem TB\tHoc luc";
    for(int i = 0; i < n; i++) {
        // in sinh vien thu i ra man hinh
        printf("\n %d", i + 1);
        printf("\t%d", a[i].id);
        printf("\t%s", a[i].ten);
        printf("\t\t%s", a[i].gioiTinh);
        printf("\t\t%d", a[i].tuoi);
        printf("\t%.2f\t%.2f\t%.2f", a[i].diemToan, a[i].diemLy, a[i].diemHoa);
        printf("\t%.2f", a[i].diemTB);
        printf("\t%s", a[i].hocluc);
    }
    printLine(100);
}
 
void sapxepTheoDTB(SV a[], int n) {
    //Sap xep theo DTB tang dan
    SV tmp;
    for(int i = 0;i < n;i++) {
        for(int j = i+1; j < n;j++) {
            if(a[i].diemTB > a[j].diemTB) {
                tmp = a[i];
                a[i] = a[j];
                a[j] = tmp;
            }
        }
    }
}

void sapXepTheoTen(SV a[], int n) {
    //Sap xep sinh vien theo ten theo thu tu tang dan
    SV tmp;
    char tenSV1[30];
    char tenSV2[30];
    for(int i = 0;i < n; i++) {
    	strcpy(tenSV1, a[i].ten);
        for(int j = i+1; j < n; j++) {
        	strcpy(tenSV2, a[j].ten);
            if(strcmp(strupr(tenSV1), strupr(tenSV2)) > 0) {
                tmp = a[i];
                a[i] = a[j];
                a[j] = tmp;
            }
        }
    }
}

int idLonNhat (SV a[], int n) {
    int idMax = 0;
    if (n > 0) {
        idMax = a[0].id;
        for(int i = 0;i < n; i++) {
            if (a[i].id > idMax) {
                idMax = a[i].id;
            }
        }
    }
    return idMax;
}

int docFile(SV a[], char fileName[]) {
    FILE * fp;
    int i = 0;
    fp = fopen (fileName, "r");
    cout << "Chuan bi doc file: "; puts(fileName);
    // doc thong tin sinh vien
    while (fscanf(fp, "%5d%30s%5s%5d%10f%10f%10f%10f%10s\n", &a[i].id, &a[i].ten, 
            &a[i].gioiTinh, &a[i].tuoi, &a[i].diemToan, &a[i].diemLy, &a[i].diemHoa, 
            &a[i].diemTB, &a[i].hocluc) != EOF) {
       i++;
       cout << " Doc ban ghi thu: " << i << endl;
    }
    cout << " So luong sinh vien co san trong file la: " << i << endl;
    cout << endl;
    fclose (fp);
    // tra ve so luong sinh vien duoc doc tu file
    return i;
}

void ghiFile(SV a[], int n, char fileName[]) {
    FILE * fp;
    fp = fopen (fileName,"w");
    for(int i = 0;i < n;i++){
        fprintf(fp, "%5d%30s%5s%5d%10f%10f%10f%10f%10s\n", a[i].id, a[i].ten,a[i].gioiTinh, 
            a[i].tuoi, a[i].diemToan, a[i].diemLy, a[i].diemHoa, a[i].diemTB, a[i].hocluc);
    }
    fclose (fp);
}

void printLine(int n) {
    cout << endl;
    for (int i = 0; i < n; i++) {
        cout << "_";
    }
    cout << endl;
}

void pressAnyKey() {
    cout << "\n\nBam phim bat ky de tiep tuc...";
    getch();
    system("cls");
}

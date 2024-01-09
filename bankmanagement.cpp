#include<iostream>//khai báo cho các đối tượng và hàm cần thiết để thực hiện các thao tác nhập và xuất trong C++
#include<fstream>//cho phép các chương trình C++ thực hiện các thao tác nhập và xuất
#include<cctype>//cho phép các chương trình C++ thực hiện các thao tác xử lý ký tự.
#include<iomanip>//cho phép các chương trình C++ định dạng đầu ra của các luồng nhập/xuất.
using namespace std;//được sử dụng để đưa toàn bộ không gian tên std (standard) vào phạm vi hiện tại. Điều này có nghĩa là bạn có thể sử dụng các thành phần (như biến, hàm, lớp, v.v.) từ thư viện chuẩn C++ mà không cần phải sử dụng tiền tố std:: trước chúng

class account {//tạo ra một lớp mới có tên là account
	int acno;//khai báo đối tượng acno datatype = số nguyên
	char name[50];//khai báo mảng (array declaration) tạo ra một mảng các ký tự (char array) có tên là name với độ dài là 50 ký tự.
	int deposit;//khai báo đối tượng deposit datatype = số nguyên
	char type;//khai báo đối tượng type datatype = ký tự
	public: // khai báo các phương thức với kiểu công khai
		void create_account();//khai báo phương thức create_account với kiểu void 
		void show_account() const;//khai báo phương thức show_account với kiểu void sử dụng const đảm bảo rằng phương thức này không vô tình thay đổi trạng thái của đối tượng, giúp bảo vệ tính toàn vẹn dữ liệu và an toàn
		void modify();//khai báo phương thức modify với kiểu void
		void dep(int);//khai báo phương thức (method declaration) cho một phương thức có tên là dep() nhận một tham số kiểu int
		void draw(int);//khai báo phương thức (method declaration) cho một phương thức có tên là draw nhập một tham số kiểu int
		void report() const;//khai báo phương thức report với kiểu void sử dụng const đảm bảo rằng phương thức này không vô tình thay đổi trạng thái của đối tượng, giúp bảo vệ tính toàn vẹn dữ liệu và an toàn
		int retacno() const;//khai báo phương thức retacno với kiểu int sử dụng const đảm bảo rằng phương thức này không vô tình thay đổi trạng thái của đối tượng, giúp bảo vệ tính toàn vẹn dữ liệu và an toàn
		int retdeposit() const;//khai báo phương thức retdeposit với kiểu int sử dụng const đảm bảo rằng phương thức này không vô tình thay đổi trạng thái của đối tượng, giúp bảo vệ tính toàn vẹn dữ liệu và an toàn
		char rettype() const;//khai báo phương thức rettype với kiểu ký tự sử dụng const đảm bảo rằng phương thức này không vô tình thay đổi trạng thái của đối tượng, giúp bảo vệ tính toàn vẹn dữ liệu và an toàn
};

void account::create_account(){//khai báo phương thức (method declaration) cho một phương thức có tên là create_account() thuộc lớp account và kế thừa các đối tượng trong account
	system("CLS");//là một câu lệnh gọi hàm system() trong thư viện <stdlib.h>. Hàm system() được sử dụng để thực thi một lệnh hệ thống. Trong trường hợp này, lệnh hệ thống được thực thi là CLS, là lệnh xóa màn hình trong Windows.
	cout << "\n\t\t\tEnter the Account No. : ";//hiển thị thông báo
	cin >> acno;//lấy data
	cout << "\n\n\t\t\tEnter the Name of the Account holder : ";//hiển thị thông báo
	cin.ignore();//bỏ qua tất cả các ký tự từ đầu vào cho đến khi gặp một ký tự '\n' (dấu xuống dòng).
	cin.getline(name, 50);//đọc một chuỗi ký tự từ đầu vào và lưu trữ chuỗi ký tự đó vào biến name. Chuỗi ký tự được đọc sẽ kết thúc ở dấu xuống dòng hoặc sau khi đọc được 50 ký tự, tùy theo điều kiện nào xảy ra trước.
	cout << "\n\t\t\tEnter Type of the Account (C/S) : ";//hiển thị thông báo
	cin >> type;//lấy data
	type = toupper(type);//chuyển đổi ký tự type thành chữ hoa và gán giá trị đó cho biến type
	cout << "\n\t\t\tEnter The Initial amount : ";//hiển thị thông báo
	cin >> deposit;//lấy data
	cout << "\n\n\t\t\tAccount Created..";//hiển thị thông báo
}

void account::show_account() const{//khai báo phương thức (method declaration) cho một phương thức có tên là show_account() thuộc lớp account và kế thừa các đối tượng trong account sử dụng const đảm bảo rằng phương thức này không vô tình thay đổi trạng thái đối tượng
	cout << "\n\t\t\tAccount No. : " << acno;//hiển thị thông tin data mà user nhập vào
	cout << "\n\t\t\tAccount Holder Name : ";//hiển thị thông báo
	cout << name;//hiển thị name mà user nhập
	cout << "\n\t\t\tType of Account : " << type;//hiển thị type mà người dùng nhập
	cout << "\n\t\t\tBalance amount : " << deposit;//hiển thị deposit mà người dùng nhập
}

void account::modify(){//khai báo phương thức (method declaration) cho một phương thức có tên là modify() thuộc lớp account và kế thừa các đối tượng trong account
	cout << "\n\t\t\tAccount No. : "<<acno;//hiển thị dữ liệu acno
	cout << "\n\t\t\tModify Account Holder Name : ";//hiển thị 1 thông báo
	cin.ignore();//bỏ qua tất cả các ký tự từ đầu vào cho đến khi gặp một ký tự '\n' (dấu xuống dòng)
	cin.getline(name,50);//đọc một chuỗi ký tự từ đầu vào và lưu trữ chuỗi ký tự đó vào biến name. chuỗi ký tự được đọc sẽ kết thúc ở dấu xuống dòng hoặc sau khi đọc được 50 ký tự, tùy theo điều kiện nào xảy ra trước
	cout << "\n\t\t\tModify Type of Account : ";//hiển thị thông báo
	cin >> type;//lấy data từ user
	type = toupper(type);//chuyển đổi ký tự type thành chữ hoa và gán giá trị đó cho biến type
	cout << "\n\t\t\tModify Balance amount : ";//hiển thị thông báo
	cin >> deposit;//lấy data từ user
}

void account::dep(int x){//khai báo phương thức (method declaration) cho một phương thức có tên là dep() thuộc class account và kế thừa các đối tượng trong account lấy một tham số x với kiểu int
	deposit += x;//Lấy giá trị hiện tại của biến deposit, Cộng giá trị của biến x vào giá trị hiện tại của biến deposit, Gán giá trị kết quả cho biến deposit
}

void account::draw(int x){//khai báo phương thức (method declaration) cho một phương thức có tên là draw() thuộc class account và kế thừa các đối tượng trong account lấy một tham số x với kiểu int
	deposit-=x;//lấy giá trị hiện tại của biến deposit, trừ giá trị của biến x vào giá trị hiện tại của biến deposit, gán giá trị kết quả cho biến deposit
}

void account::report() const{//khai báo phương thức (method declaration) cho một phương thức có tên là report() thuộc class account và kế thừa các đối tượng trong account sử dụng const đảm bảo rằng phương thức này không vô tình thay đổi trạng thái đối tượng
	//in ra các giá trị của các biến acno, name, type và deposit theo định dạng bảng cột với căn lề trái
	cout << acno << setw(10) << " " << name << setw(10) << " " << type << setw(6) << deposit << endl;
}

int account::retacno() const{//khai báo phương thức (method declaration) cho một phương thức có tên là retacno() thuộc class account và kế thừa các đối tượng trong account sử dụng const đảm bảo rằng phương thức này không vô tình thay đổi trạng thái đối tượng
	return acno;//trả về data acno
}

int account::retdeposit() const{//khai báo phương thức (method declaration) cho một phương thức có tên retdeposit() thuộc class account và kế thừa các đối tượng trong account sử dụng const đảm bảo rằng phương thức này không vô tình thay đổi trạng thái đối tượng
	return deposit;//trả về data deposit
}

char account::rettype() const{//khai báo phương thức (method declaration) cho một phương thức có tên rettype() thuộc class account và kế thừa các đối tượng trong account sử dụng const đảm bảo rằng phương thức này không vô tình thay đổi trạng thái đối tượng
	return type;//trả về data type
}

void write_account();//khởi tạo phương thức write_account() với kiểu void
void display_sp(int);//khởi tạo phương thức display_sp() với kiểu void lấy tham số kiểu int
void modify_account(int);//khởi tạo phương thức modify_account() với kiểu void lấy tham số kiểu int
void delete_account(int);//khởi tạo phương thức delete_account() với kiểu void lấy tham số kiểu int
void display_all();//khởi tạo phương thức display_all() với kiểu void
void deposit_withdraw(int, int);//khởi tạo phương thức deposit_withdraw() với kiểu void lấy 2 tham số kiểu int

int main(){ //khởi tạo hàm main với kiểu int để thực thi lệnh
	char ch;//khởi tạo biến ch kiểu char(ký tự)
	int num;//khởi tạo biến num kiểu int(số nguyên)
	do{ //tạo một vòng lặp
		system("CLS");//là một câu lệnh gọi hàm system() trong thư viện <stdlib.h>. Hàm system() được sử dụng để thực thi một lệnh hệ thống. Trong trường hợp này, lệnh hệ thống được thực thi là CLS, là lệnh xóa màn hình trong Windows.
		//in ra màn hình các lựa chọn thực hiện cho user
		cout << "\n\n\t\t\t\t======================\n";
		cout << "\t\t\t\tBANK MANAGEMENT SYSTEM";
		cout << "\n\t\t\t\t======================\n";
		cout << "\t\t\t\t    ::MAIN MENU::\n";
		cout << "\n\t\t\t\t1. NEW ACCOUNT";
		cout << "\n\t\t\t\t2. DEPOSIT AMOUNT";
		cout << "\n\t\t\t\t3. WITHDRAW AMOUNT";
		cout << "\n\t\t\t\t4. BALANCE ENQUIRY";
		cout << "\n\t\t\t\t5. ALL ACCOUNT HOLDER LIST";
		cout << "\n\t\t\t\t6. CLOSE AN ACCOUNT";
		cout << "\n\t\t\t\t7. MODIFY AN ACCOUNT";
		cout << "\n\t\t\t\t8. EXIT";
		cout << "\n\n\t\t\t\tSelect Your Option (1-8): ";
		cin >> ch;//lấy data từ người dùng nhập vào

		switch(ch){//sử dụng switch case so sánh kết quả user nhập với các giá trị sau để thực hiện chương trình
		case '1'://nếu user nhập 1
			write_account();//thì chạy hàm write_account()
			break;//thoát
		case '2'://nếu user nhập 2
			system("CLS");//là một câu lệnh gọi hàm system() trong thư viện <stdlib.h>. Hàm system() được sử dụng để thực thi một lệnh hệ thống. Trong trường hợp này, lệnh hệ thống được thực thi là CLS, là lệnh xóa màn hình trong Windows.
			cout << "\n\n\t\t\tEnter The account No. : "; cin >> num;//hiển thị thông báo và lấy data người dùng
			deposit_withdraw(num, 1);//chạy hàm deposit_withdraw với hai đối số được người dùng truyền vào
			break;//thoát
		case '3'://nếu user nhập 3
			system("CLS");//là một câu lệnh gọi hàm system() trong thư viện <stdlib.h>. Hàm system() được sử dụng để thực thi một lệnh hệ thống. Trong trường hợp này, lệnh hệ thống được thực thi là CLS, là lệnh xóa màn hình trong Windows.
			cout << "\n\n\t\t\tEnter The account No. : "; cin >> num;//hiển thị thông báo và lấy data người dùng
			deposit_withdraw(num, 2);//chạy hàm deposit_withdraw() với 2 đối số được người dùng truyền vào
			break;//thoát
		case '4'://nếu user nhập 4
			system("CLS");//là một câu lệnh gọi hàm system() trong thư viện <stdlib.h>. Hàm system() được sử dụng để thực thi một lệnh hệ thống. Trong trường hợp này, lệnh hệ thống được thực thi là CLS, là lệnh xóa màn hình trong Windows.
			cout << "\n\n\t\t\tEnter The account No. : "; cin >> num;//hiển thị thông báo và lấy data từ user
			display_sp(num);//chạy hàm display_sp() với đối số được người dùng truyền vào
			break;//thoát
		case '5'://nếu user nhập 5
			display_all();//chạy hàm display_all()
			break;//thoát
		case '6'://nếu user nhập 6
			system("CLS");//là một câu lệnh gọi hàm system() trong thư viện <stdlib.h>. Hàm system() được sử dụng để thực thi một lệnh hệ thống. Trong trường hợp này, lệnh hệ thống được thực thi là CLS, là lệnh xóa màn hình trong Windows.
			cout << "\n\n\t\t\tEnter The account No. : "; cin >> num;//hiển thị thông tin và lấy data user
			delete_account(num);//chạy hàm delete_account() với đối số được user truyền vào
			break;//thoát
		case '7'://nếu user nhập 7
		 	system("CLS");//là một câu lệnh gọi hàm system() trong thư viện <stdlib.h>. Hàm system() được sử dụng để thực thi một lệnh hệ thống. Trong trường hợp này, lệnh hệ thống được thực thi là CLS, là lệnh xóa màn hình trong Windows.
			cout << "\n\n\t\t\tEnter The account No. : "; cin >> num;//hiển thị thông báo và lấy data user
			modify_account(num);//chạy hàm modify_account() với đối số được user truyền vào
			break;//thoát
		case '8'://nếu user nhập 8
		 	system("CLS");//là một câu lệnh gọi hàm system() trong thư viện <stdlib.h>. Hàm system() được sử dụng để thực thi một lệnh hệ thống. Trong trường hợp này, lệnh hệ thống được thực thi là CLS, là lệnh xóa màn hình trong Windows.
			cout << "\n\n\t\t\tBrought To You By code-projects.org";//hiển thị thông tin
			break;//thoát
		default :cout << "\a";//nếu những điều kiện trên không đúng thì chạy lệnh này
		}
		cin.ignore();//được sử dụng để bỏ qua một số ký tự không mong muốn từ đầu vào tiêu chuẩn. Ví dụ, nó có thể được sử dụng để bỏ qua khoảng trắng, dấu chấm câu, hoặc các ký tự khác mà bạn không muốn xử lý
		cin.get();//được sử dụng để đọc một ký tự từ đầu vào tiêu chuẩn.
    } while (ch != '8');//cho điều kiện để tiếp tục chạy lệnh
	return 0;//trả về để chạy hàm main in thông tin ra màn hình
}

void write_account(){//khai báo hàm write_account() với kiểu void
	account ac;//khai báo một đối tượng ac, ac tham chiếu/ thuộc lớp account hay ac là biến dùng để thuận lợi cho việc đặt biến sau này
	ofstream outFile;//khai báo một đối tượng outFile thuộc lớp ofstream. Lớp ofstream được sử dụng để tạo và ghi dữ liệu vào tệp tin
	outFile.open("account.dat",ios::binary|ios::app);//mở một tệp tin có tên "account.dat" ở chế độ ghi nhị phân và ghi thêm dữ liệu vào cuối tệp tin nếu nó đã tồn tại
	ac.create_account();//dưới sự quản lý của hệ thống lớp account mà ac là biến, ac chạy hàm create_account()
	//reinterpret_cast<char *>: là một phép ép kiểu tường minh (explicit type casting) trong ngôn ngữ C++. Nó được sử dụng để chuyển đổi một giá trị của một kiểu dữ liệu thành một giá trị của kiểu dữ liệu khác
	//rong trường hợp cụ thể của reinterpret_cast<char *>, nó sẽ chuyển đổi một giá trị của bất kỳ kiểu dữ liệu nào thành một con trỏ kiểu char*. Điều này cho phép ta truy cập trực tiếp vào các byte nhị phân của giá trị đó
	outFile.write(reinterpret_cast<char *> (&ac), sizeof(account));//ghi dữ liệu của đối tượng ac thuộc kiểu account vào tệp tin đang được mở với outFile
	outFile.close();//đóng file account.dat
}

void display_sp(int n){//khai báo hàm display_sp() với kiểu void
	account ac;//khai báo một đối tượng ac, ac tham chiếu/ thuộc lớp account hay ac là biến dùng để thuận lợi cho việc đặt biến sau này
	bool flag = false;//khai báo biến flag thuộc kiểu boolean với giá trị false
	ifstream inFile;//khai báo một đối tượng inFile thuộc lớp ifstream. Lớp ifstream được sử dụng để đọc dữ liệu từ tệp tin
	inFile.open("account.dat", ios::binary);//mở một tệp tin account.dat và đọc ở chế độ nhị phân
	if(!inFile){//nếu không tồn tại inFile thì 
		cout << "File could not be open !! Press any Key...";//hiển thị thông báo và
		return;//không trả về gì cả
	}
	cout << "\n\t\t\tBALANCE DETAILS\n";//hiển thị thông báo
    while(inFile.read(reinterpret_cast<char *> (&ac), sizeof(account))){//đọc dữ liệu từ tệp tin đang được mở với inFile và lưu trữ vào đối tượng ac thuộc kiểu account
	//reinterpret_cast<char*>(&ac): Đây là một phép ép kiểu tường minh (explicit type casting), nó chuyển đổi địa chỉ bộ nhớ của đối tượng ac thành con trỏ kiểu char*. Điều này cho phép ta truy cập trực tiếp vào các byte nhị phân của vùng nhớ đó
		if(ac.retacno() == n){//kiểm tra xem số tài khoản của đối tượng ac có bằng n hay không nếu bằng thì
			ac.show_account();//hiển thị số tài khoản của đối tượng ac ra màn hình cho user xem
			flag = true;//flag trả về true nếu tài khoản của đối tượng ac khớp với tài khoản n
		}
	}
    inFile.close();//đóng file
	if(flag == false)//nếu tài khoản của đối tượng ac không bằng n tức là flag = false thì
		cout<<"\n\n\t\t\tAccount number does not exist";//hiển thị thông báo lỗi cho người dùng
}

void modify_account(int n){//khai báo phương thức modify_account() với kiểu void lấy 1 tham số n kiểu int
	bool found = false;//khai báo biến found với kiểu boolean với giá trị false
	account ac;//khai bóa một đối tượng ac, ac tham chiếu/ thuộc lớp account hay ac là biến dùng để thuận lợi cho việc đặt biến sau này
	fstream File;//khai báo một đối tượng File thuộc lớp fstream. Lớp fstream là một lớp hỗ trợ việc đọc và ghi dữ liệu từ tệp tin
    File.open("account.dat", ios::binary|ios::in|ios::out);//mở tệp "account.dat" ở chế độ nhị phân, cho phép cả đọc và ghi dữ liệu. Nếu tệp không tồn tại, nó sẽ được tạo mới
	if( !File ){//nếu không tồn tại
		cout << "File could not be open !! Press any Key...";//hiển thị thông báo
		return;//không trả về gì cả
	}
	while(!File.eof() && found == false){//File.eof() là hàm kiểm tra xem đã đến cuối tệp chưa. toán tử phủ định. Trả về true nếu đã đến cuối tệp, false nếu chưa Kiểm tra xem giá trị của biến found có bằng false hay không
		File.read(reinterpret_cast<char *> (&ac), sizeof(account));//đọc dữ liệu từ file được biểu thị bởi đối tượng File. lấy địa chỉ của biến ac, chuyển đổi địa chỉ thành kiểu con trỏ char. lấy kích thước của biến account
		if(ac.retacno() == n){//nếu dữ liệu của retacno bằng n thì
			ac.show_account();//hiển thị data cho user
			cout << "\n\n\t\t\tEnter The New Details of account" << endl;//hiển thị thông báo
			ac.modify();//chạy phương thức modify
			int pos = (-1) * static_cast<int>(sizeof(account));//khai báo biến pos kiểu int gán giá trị: Nhân giá trị -1 với kích thước của account đã được chuyển đổi thành int, tạo ra một giá trị nguyên âm bằng tổng kích thước của account nhân với -1
			File.seekp(pos,ios::cur); //fncallat1353 //di chuyển con trỏ của file File đến vị trí pos theo hướng hiện tại.
		    File.write(reinterpret_cast<char *> (&ac), sizeof(account));//đọc data trong file File trong địa chỉ ac kiểu ký tự char, lấy kích thước account
		    cout << "\n\n\t\t\tRecord Updated";//hiển thị thông báo
		    found = true;//thay đổi value thành true cho phép chạy
		}
	}
	File.close();//đóng file
	if(found == false)//nếu value của found bằng false thì
		cout << "\n\n\t\t\tRecord Not Found ";//hiển thị thông báo
}

void delete_account(int n){//khai báo phương thức kiểu void lấy một tham số n kiểu int
	account ac;//khai báo một đối tượng ac, ac tham chiếu/ thuộc lớp account hay ac là biến dùng để thuận lợi cho việc đặt biến sau này
	ifstream inFile;//khai báo biến của kiểu ifstream. Biến inFile sẽ được sử dụng để đọc dữ liệu từ một tệp
	ofstream outFile;//khai báo biến thuộc lớp ofstream. Biến outFile sẽ được sử dụng để ghi dữ liệu vào một tệp
	inFile.open("account.dat", ios::binary);//mở tệp account.dat ở chế độ nhị phân để đọc
	if(!inFile){//nếu không tồn tại inFile(file account.dat không tồn tại) thì
		cout<<"File could not be open !! Press any Key...";//hiển thị thông báo
		return;//không trả về gì cả
	}
	outFile.open("Temp.dat", ios::binary);//mở têp Temp.dat và ghi dữ liệu vào dưới dạng nhị phân
	inFile.seekg(0, ios::beg);//di chuyển con trỏ vị trí về vị trí bắt đầu của tệp, sau đó chương trình sẽ đọc dữ liệu từ tệp và in ra màn hình
	while(inFile.read(reinterpret_cast<char *> (&ac), sizeof(account))){//tạo một vòng lặp while đọc dữ liệu nhị phân từ file inFile và lưu trữ vào địa chỉ ac(biến ac) dưới dạng các ký tự, lấy kích thước của account
		if(ac.retacno() != n){//nếu dữ liệu trong ac không bằng n, thì 
			outFile.write(reinterpret_cast<char *> (&ac), sizeof(account));//ghi dữ liệu nhị phân từ biến ac vào file outFile kiểu ký tự, lấy kích thước account
		}
	}
    inFile.close();//đóng file inFile
	outFile.close();//đóng file outFile
	remove("account.dat");//gỡ file account.dat
	rename("Temp.dat","account.dat");//đổi tên file Temp.dat thành account.dat
	cout<<"\n\nRecord Deleted ..";//hiển thị thông báo
}

void display_all(){//khai báo một phương thức với kiểu void
	system("CLS");
	account ac;
	ifstream inFile;
	inFile.open("account.dat",ios::binary);
	if(!inFile){
		cout<<"File could not be open !! Press any Key...";
		return;
	}
	//hiển thị thông báo
	cout<<"\n\n\t\tACCOUNT HOLDER LIST\n\n";
	cout<<"====================================================\n";
	cout<<"A/c no.      NAME           Type  Balance\n";
	cout<<"====================================================\n";
	while(inFile.read(reinterpret_cast<char *> (&ac), sizeof(account))){
		ac.report();
	}
	inFile.close();
}

void deposit_withdraw(int n, int option){
	int amt;
	bool found=false;
	account ac;
	fstream File;
    File.open("account.dat", ios::binary|ios::in|ios::out);
	if(!File){//nếu không tồn tại File thì
		cout<<"File could not be open !! Press any Key...";//hiển thị thông báo
		return;//không trả về gì cả
	}
	while(!File.eof() && found==false){
		File.read(reinterpret_cast<char *> (&ac), sizeof(account));
		if(ac.retacno()==n){
			ac.show_account();
			if(option==1){
				cout<<"\n\n\t\t\tTO DEPOSITSS AMOUNT";//hiển thị thông báo
				cout<<"\n\n\t\t\tEnter The amount to be deposited: ";//hiển thị thông báo
				cin >> amt;//lấy data và lưu vào biến amt
				ac.dep(amt);
			}
		    if(option==2){
				cout<<"\n\n\t\t\tTO WITHDRAW AMOUNT";//hiển thị thông báo
				cout<<"\n\n\t\t\tEnter The amount to be withdraw: ";//hiển thị thông báo
				cin >> amt;//lấy dữ liệu và lưu vào biến amt
				int bal=ac.retdeposit()-amt;
				if(bal<0)
					cout<<"Insufficience balance";
				else
					ac.draw(amt);
		      }
			int pos=(-1)*static_cast<int>(sizeof(ac));
			File.seekp(pos,ios::cur);//fn1353
			File.write(reinterpret_cast<char *> (&ac), sizeof(account));
			cout<<"\n\n\t\t\tRecord Updated";//hiển thị thông báo
			found = true;//found bằng true cho phép thực hiện lệnh
	       }
         }
    File.close();//đóng file File
	if(found == false)//nếu found = false thì
		cout << "\n\n\t\t\tRecord Not Found ";//hiển thị thông báo
}

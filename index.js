#include <iostream>
using namespace std;

int main() {
  int a;int b;
  cin >>a;cin>>b;
  for (int n=a;n<=b;n++)
  {for (int i=2;i<=b;i++) {
    if (n%i != 0){cout << n;}else {break;}
  }
  }
  }

all: tests palindromos

palindromos: palindromo.o
	cc palindromos.c palindromo.o -o palindromos

palindromo.o: palindromo.c
	cc -c palindromo.c

palindromo_tests: palindromo.o
	cc palindromo_tests.c palindromo.o -o palindromo_tests

tests: palindromo_tests
	./palindromo_tests

clean:
	rm -rf palindromos palindromo_tests *.o
all: tests palindromos

palindromos: palindromos.c palindromo.o
	gcc palindromos.c palindromo.o -o palindromos

palindromo.o: palindromo.c
	gcc -c palindromo.c

palindromo_tests: palindromo_tests.c palindromo.o
	gcc palindromo_tests.c palindromo.o -o palindromo_tests

tests: palindromo_tests
	./palindromo_tests

clean:
	rm -rf palindromos palindromo_tests *.o

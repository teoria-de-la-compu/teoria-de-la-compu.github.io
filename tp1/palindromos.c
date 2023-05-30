#include <stdio.h>
#include "palindromo.h"

int main(int argc, char **argv) {
    int i = 1;
    if (argc == 1) {
        puts("uso: ./palindromo palabras+");
        puts("\n\tImprime las palabras que son palíndromo.");
        return -1;
    }
    for (; i < argc; ++i)
        if (es_palindromo(argv[i]) == 1)
            puts(argv[i]);
        
    return 0;
}

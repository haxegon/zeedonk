function f(n) {
    if (n<2) return 1;
    else return f(n-1)+f(n-2);
}

/* if you make the value at all big,  */
/* your browser will explode.         */
/* So don't do that!                  */
trace(f(5));
<?php
function performOperation($operation, $a, $b) {
    return $operation($a, $b);
}

$result = performOperation(fn($x, $y) => $x + $y, 10, 20);

echo $result;
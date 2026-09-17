<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $password = isset($_POST['password']) ? $_POST['password'] : '';

    if ($password === 'vision2026') {
        $file = __DIR__ . '/secure/Wavescope - Pitch.pdf';
        
        if (file_exists($file)) {
            header('Content-Description: File Transfer');
            header('Content-Type: application/pdf');
            header('Content-Disposition: attachment; filename="Wavescope - Pitch.pdf"');
            header('Expires: 0');
            header('Cache-Control: must-revalidate');
            header('Pragma: public');
            header('Content-Length: ' . filesize($file));
            readfile($file);
            exit;
        } else {
            echo "File not found.";
        }
    } else {
        // Redirect back with an error
        header("Location: pitch.html?error=1");
        exit;
    }
} else {
    // If not POST, redirect to pitch page
    header("Location: pitch.html");
    exit;
}
?>

<?php

// Initialize a file URL to the variable
$url = 'https://agora-file-storage-prod.s3.us-west-1.amazonaws.com/opening-attachments/6771714466973428521?response-content-disposition=inline%3B%20filename%3D%22Final_Draft_desktop.jpg%22%3B%20filename%2A%3Dutf-8%27%27Final_Draft_desktop.jpg&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJIMEYCIQDl%2Fn4vChcIEwflKDrb0e0xQmxN1GPim%2FbfEcWVwFFOuQIhAIMVUgnTlfRf6rK5AYHBtTXf98K4GAVkENrpXu2j0M0hKpAECDsQABoMNzM5OTM5MTczODE5IgxXyRq5tS1Elw2hXo8q7QMFMr6G%2Fj856O5t2v2eIrS0q%2BJXc0Gf%2BuI8Ym1JCxMiFvUSRf%2FIuTqyj%2B%2FskczqsCip51NvJSImJ0AzM74IgVlBW8Un883toGQGaZTGRrGolAS30JmidmPX1aiiSx5xWjoLF2CTQmWSu42vLl3ZRtGQSUVQ0xzTzpOBriqP9Ai1A5eqGvNHlqAUaqgiIx7uqKqtkhDwbUgqpfLCDOCYEtAF5wZ9OwQhkAhCeLkYJRpAtDFr2TzJeUtZEupxiB%2BtrSIvwkwTSqO%2FjtB2V6BXkCtjhiqR1PMTi05pmCqwC8Z3A61asgReTmLxz9yMWUYzrnNq35SSWA%2B3oN4ccB3zmup2%2Bwwo43a4cfTFUlD3IRcMZA6k8Tw9oNiLhXi0OjowTNMBg%2Be6IISGJsRvnbcnxAhyhKvzgxHd1ycLXi6j%2Fzy4durQEKW9lwVg6VhCvze7Gi9%2FXeGwN7jCx7vX8M0BjnRnEDv%2F4eiWx0fGcsz%2Bk9VmLHHnoMnDWyGXbjQFJ9mt9EcU5cIOAUwMTOK9UOanyiPu4cUp4eiTxg1ZWKRpk2fjs1PPsQj0dEfMKe3ACHLijYuUWFL8vkwj9rvEzlBhU0wh2u3bS%2FzY%2Bg25s1Mq3xF7tSboJu3OY9DvP7%2F3rHPunbSwFZvI7cRgyTqbPoGjMJb%2B5%2FUFOu4BZwRi7VeXqVa3g5a59%2Fko2q3Tfj1wiazSamG45gQvwsBA1nI1yLI3ejr1C%2BP4uk1mhGwHlppj%2Brxl8ocXNFWPSsP1PMxr72e5DaelCvVwJ96TDPcRYZECjQiOcg9h29%2BDViQGkfTzkXeKp51eiUEm5zuV2mrf9pBCvbSSRwWe6y0zAAoOaHMYM1rpOUvTm1%2FZR1%2BR7FtNHCdSNA%2FFq2ghq%2FBnqsgrSrdj6%2BRLZVbjI3YSqt9q6kicYc6%2FTGzl44X3AZS5NN13TZoNe4pIUO89cxcxQAaisDOMDgv7rMIU%2FUTPQq9oV%2B2k13Swfbwcrg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200512T050942Z&X-Amz-SignedHeaders=host&X-Amz-Expires=21599&X-Amz-Credential=ASIA2YR6PYW54LDAAYQI%2F20200512%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=c7f446d50370a2cbd5aa94e680584b75a9df178faa46e5914e4688503b44e3e2';

// Use basename() function to return the base name of file
$file_name = basename($url);

// Use file_get_contents() function to get the file
// from url and use file_put_contents() function to
// save the file by using base name
if(file_put_contents( $file_name,file_get_contents($url))) {
	echo "File downloaded successfully";
}
else {
	echo "File downloading failed.";
}

?>

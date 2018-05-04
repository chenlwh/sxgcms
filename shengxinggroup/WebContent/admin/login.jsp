<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>圣行集团门户管理系统</title>
<link rel="shortcut icon" href="ico/favicon.ico">
<link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet">
<script src="../jquery/jquery-1.11.3.min.js"></script>

</head>
<body class="index">
	<div class="container docs-container">
		<div class="row">

			<div class="col-md-3"></div>

			<div class="col-md-9">
				<div class="page-header">
					<h1>圣行集团门户管理系统</h1>
				</div>

				<form action="user/login" class="form-horizontal" method="post">
					<div class="form-group">
						<label for="username" class="col-sm-2 control-label"
							style="text-align: left">用户名：</label>
						<div class="col-sm-5">
							<input type="text" class="form-control" name="username"
								maxlength=32>
						</div>

					</div>

					<div class="form-group">

						<label for="password" class="col-sm-2 control-label"
							style="text-align: left">密 码：</label>
						<div class="col-sm-5">
							<input type="text" class="form-control" name="password"
								maxlength=32>
						</div>

					</div>
					<p>
						<span style="color: red;">${returnMsg }</span>
					</p>

					<br>


					<div class="form-group">
						<div class="col-sm-offset-2 col-sm-10">
							<button type="submit" class="btn btn-default">登 录</button>
						</div>
					</div>
				</form>
			</div>

		</div>
	</div>


</body>
</html>
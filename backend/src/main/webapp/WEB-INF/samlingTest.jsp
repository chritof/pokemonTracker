<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Insert title here</title>
</head>
<body>
<ul>
    <c:forEach var="b" items="${samling}">
        <li>${b.navn}</li>
    </c:forEach>
</ul>


</body>
</html>
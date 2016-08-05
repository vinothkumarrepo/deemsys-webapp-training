<%@ page import="java.io.*,java.util.*,java.sql.*"%>
<%@ page import="javax.servlet.http.*,javax.servlet.*" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql"%>

 
<sql:setDataSource var="eminf" driver="com.mysql.jdbc.Driver"
     url="jdbc:mysql://192.168.1.39:3306/deemsysusers"
     user="deemsys"  password="deemsys@123"/>
 
<sql:query dataSource="${eminf}" var="result">
SELECT empId, firstName, lastName from basicinfo;
</sql:query>
 
<table class="table table-striped">
<tr>
   <th>Emp ID</th>
   <th>First Name</th>
   <th>Last Name</th>
</tr>
<c:forEach var="row" items="${result.rows}">
<tr>
   <td><c:out value="${row.empId}"/></td>
   <td><c:out value="${row.firstName}"/></td>
   <td><c:out value="${row.lastName}"/></td>
</tr>
</c:forEach>
</table>
 

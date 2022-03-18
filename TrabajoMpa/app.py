from flask import Flask
from flask import render_template,request,redirect
from flaskext.mysql import MySQL 

app= Flask(__name__)
app.secret_key="1234"

mysql= MySQL()
app.config['MYSQL_DATABASE_HOST']='localhost'
app.config['MYSQL_DATABASE_USER']='root'
app.config['MYSQL_DATABASE_PASSWORD']='2602'
app.config['MYSQL_DATABASE_DB']='dbtrabajospa'
mysql.init_app(app)



@app.route('/')
def index():

    sql ="SELECT * FROM `persona`;"
    conn= mysql.connect()
    cursor=conn.cursor()
    cursor.execute(sql)

    persona=cursor.fetchall()
    print(persona)

    conn.commit() 
    return render_template('persona/index.html', persona=persona)

@app.route('/destroy/<int:id>')
def destroy(id):
    conn= mysql.connect()
    cursor=conn.cursor()

    cursor.execute("DELETE FROM persona WHERE id=%s",(id))
    conn.commit()
    return redirect('/')

@app.route('/edit/<int:id>')
def edit(id):
    conn= mysql.connect()
    cursor=conn.cursor()
    cursor.execute("SELECT * FROM persona WHERE id=%s", (id))
    persona=cursor.fetchall()
    conn.commit()
    return render_template('persona/edit.html', persona=persona)

@app.route('/update', methods=['POST'])
def update():
    _nombres=request.form['txtNombre']
    _apellidos=request.form['txtApellidos']
    _tipodocumento=request.form['txtTipodocumento']
    _documento=request.form['numDocumento']
    _pais=request.form['txtPais']
    _dpto=request.form['txtDpto']
    _ciudad=request.form['txtCiudad']
    _fechanacimiento=request.form['dateFechanacimiento']
    _email=request.form['txtEmail']
    _telefono=request.form['txtTelefono']
    _usuario=request.form['txtUsuario']
    _contraseña=request.form['txtContraseña']
    id=request.form['txtID']

    sql ="UPDATE persona SET nombre=%s, apellidos=%s, tipodocumento=%s, nrodocumento=%s, paisresidencia=%s, dptoresidencia=%s, ciudadresidencia=%s, fechanacimiento=%s, email=%s, telefono=%s, usuario=%s, contraseña=%s WHERE id=%s;"
    
    datos=(_nombres,_apellidos,_tipodocumento,_documento,_pais,_dpto,_ciudad,_fechanacimiento,_email,_telefono,_usuario,_contraseña,id)

    conn= mysql.connect()
    cursor=conn.cursor()

    cursor.execute(sql, datos)
    conn.commit()

    return redirect('/')

@app.route('/create')
def create():
    return render_template('persona/create.html')

@app.route('/store', methods=['POST'])
def storage():

    _nombres=request.form['txtNombre']
    _apellidos=request.form['txtApellidos']
    _tipodocumento=request.form['txtTipodocumento']
    _documento=request.form['numDocumento']
    _pais=request.form['txtPais']
    _dpto=request.form['txtDpto']
    _ciudad=request.form['txtCiudad']
    _fechanacimiento=request.form['dateFechanacimiento']
    _email=request.form['txtEmail']
    _telefono=request.form['txtTelefono']
    _usuario=request.form['txtUsuario']
    _contraseña=request.form['txtContraseña']



    sql ="INSERT INTO `persona` (`id`, `nombre`, `apellidos`, `tipodocumento`, `nrodocumento`, `paisresidencia`, `dptoresidencia`, `ciudadresidencia`, `fechanacimiento`, `email`, `telefono`, `usuario`, `contraseña`) VALUES (NULL, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s);"
    
    datos=(_nombres,_apellidos,_tipodocumento,_documento,_pais,_dpto,_ciudad,_fechanacimiento,_email,_telefono,_usuario,_contraseña)

    conn= mysql.connect()
    cursor=conn.cursor()
    cursor.execute(sql, datos)
    conn.commit() 
    
    return redirect('/')
    


if __name__== '__main__':
    app.run(debug=True)
# Proyecto 8
## API REST FILES

Una API REST FILES que te permite interaccionar con un sistema de gestión de un atlas gastronómico. Permite realizar operaciones CRUD (crear, leer, actualizar, eliminar) tanto de los platos como de los países.


## Endpoints

## Colección Countries

### 1. **Obtener todos los países**
-**URL**: "/api/v1/countries"
-**Método**: "GET"
-**Descripción**: Obtiene la lista de todos los países en la base de datos.
-**Respuesta de ejemplo**: 
```json
[
	{
		"_id": "67d5db4d35064941ea76cc8e",
		"countryName": "Japón",
		"img": "https://img.asmedia.epimg.net/resizer/v2/T3W5EEBTBBDWXMFBH7XV7JYPDM.jpg?auth=647e76fa9783c47438a9633fbd54aa4430fd3daea16152b0a9830dd9631bc5b1&width=1472&height=828&smart=true",
		"__v": 0,
		"createdAt": "2025-03-15T19:55:57.177Z",
		"updatedAt": "2025-03-15T19:55:57.177Z"
	},
	{
		"_id": "67d5db4d35064941ea76cc8f",
		"countryName": "México",
		"img": "https://www.cronista.com/files/image/898/898243/669ea9412095b.jpg",
		"__v": 0,
		"createdAt": "2025-03-15T19:55:57.179Z",
		"updatedAt": "2025-03-15T19:55:57.179Z"
	},
	{
		"_id": "67d5db4d35064941ea76cc90",
		"countryName": "España",
		"img": "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/08/23/bandera-espana-freepik-1.jpeg",
		"__v": 0,
		"createdAt": "2025-03-15T19:55:57.179Z",
		"updatedAt": "2025-03-15T19:55:57.179Z"
	}
]
```
### 2. **Obtener un país por su id**
- **URL**: "/api/v1/countries/:id"
- **Método**: "GET"
- **Descripción**: Obtiene un país por su id en la base de datos.
- **Parámetros**:
    - `id`(requerido): El identificador único del país. 
- **Respuesta de ejemplo**: 
```json
{
	"_id": "67d5c8011a53645893b126cf",
	"countryName": "Tailandia",
	"img": "thai",
	"createdAt": "2025-03-15T18:33:37.976Z",
	"updatedAt": "2025-03-15T18:33:37.976Z",
	"__v": 0
}
```

### 3. **Crear un nuevo país**
- **URL**: "/api/v1/countries"
- **Método**: "POST"
- **Descripción**: Crea un nuevo país en la base de datos.
- **En la pestaña "Body"**:
		-  Selecciona **Form Data** en desplegable
	    - Añade los siguientes campos:
	    - name: `countryName`  → value: `nombre del país` → type: `text`
	    -  name: `img`  → value: `Choose File` → type: `file`

- **Respuesta de ejemplo**:
    ```json
   {
	   "countryName": "Italia",
	   "_id": "67d6b6e400e4f211449ac85f",
	   "img": "https://res.cloudinary.com/dqhivvhua/image/upload/v1742124772/foodAtlas/ejcncypvrquugmaancqh.jpg",
	   "createdAt": "2025-03-16T11:32:52.869Z",
	   "updatedAt": "2025-03-16T11:32:52.869Z",
	   "__v": 0
	} 
	```

### 4. **Actualizar un país**
- **URL**: "/api/v1/countries/:id"
- **Método**: "PUT"
- **Descripción**: Actualiza un país existente.
- **Parámetros**:
    - `id`(requerido): El identificador único del país.  
- **En la pestaña "Body"**:
    -  Selecciona **Form Data** en desplegable
    - Añade los siguientes campos:
	    - name: `countryName`  → value: `nombre del país` → type: `text`
	    -  name: `img`  → value: `Choose File` → type: `file`
	
- **Respuesta de ejemplo**:
    ```json
    {
		"_id": "67d6b6e400e4f211449ac85f",
		"countryName": "Italia",
		"img": "https://res.cloudinary.com/dqhivvhua/image/upload/v1742124834/foodAtlas/ozrieaeadxvdq0zvo4po.png",
		"createdAt": "2025-03-16T11:32:52.869Z",
		"updatedAt": "2025-03-16T11:33:55.064Z",
		"__v": 0
	}
    ```
    
### 5. **Eliminar un país**
- **URL**: "/api/v1/countries/:id"
- **Método**: "DELETE"
- **Descripción**: Elimina un país de la base de datos.
- **Parametros**:
    - `id`(requerido): El identificador único del país.  
- **Respuesta de ejemplo**:
 ```json
{
	"mensaje": "Pais eliminado",
	"countryDeleted": {
		"_id": "67d6b6e400e4f211449ac85f",
		"countryName": "Italia",
		"img": "https://res.cloudinary.com/dqhivvhua/image/upload/v1742124834/foodAtlas/ozrieaeadxvdq0zvo4po.png",
		"createdAt": "2025-03-16T11:32:52.869Z",
		"updatedAt": "2025-03-16T11:33:55.064Z",
		"__v": 0
	}
}
```
    
## **Colección Foods**

### 1. **Obtener todos los platos**
- **URL**: "/api/v1/foods"
- **Método**: "GET"
- **Descripción**: Obtiene la lista de todos los platos en la base de datos.
- **Respuesta de ejemplo**:
 ```json
[
	{
		"_id": "67d5db4d35064941ea76cc92",
		"foodName": "Aceitunas",
		"img": "https://www.aceitunasbravo.com/wp-content/uploads/2024/06/Aceitunas-mananilla-Con-hueso-M-web.png",
		"country": {
			"_id": "67d5db4d35064941ea76cc90",
			"countryName": "España",
			"img": "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/08/23/bandera-espana-freepik-1.jpeg",
			"__v": 0,
			"createdAt": "2025-03-15T19:55:57.179Z",
			"updatedAt": "2025-03-15T19:55:57.179Z"
		},
		"__v": 0,
		"createdAt": "2025-03-15T19:55:57.364Z",
		"updatedAt": "2025-03-15T19:55:57.364Z"
	},
	{
		"_id": "67d5db4d35064941ea76cc93",
		"foodName": "Tepache",
		"img": "https://www.lovferments.com/wp-content/uploads/2020/06/P5213751-scaled.jpg",
		"country": {
			"_id": "67d5db4d35064941ea76cc8f",
			"countryName": "México",
			"img": "https://www.cronista.com/files/image/898/898243/669ea9412095b.jpg",
			"__v": 0,
			"createdAt": "2025-03-15T19:55:57.179Z",
			"updatedAt": "2025-03-15T19:55:57.179Z"
		},
		"__v": 0,
		"createdAt": "2025-03-15T19:55:57.364Z",
		"updatedAt": "2025-03-15T19:55:57.364Z"
	},
	{
		"_id": "67d5db4d35064941ea76cc94",
		"foodName": "Miso",
		"img": "https://www.esmacrobiotica.com/wp-content/uploads/2015/12/miso.jpg",
		"country": {
			"_id": "67d5db4d35064941ea76cc8e",
			"countryName": "Japón",
			"img": "https://img.asmedia.epimg.net/resizer/v2/T3W5EEBTBBDWXMFBH7XV7JYPDM.jpg?auth=647e76fa9783c47438a9633fbd54aa4430fd3daea16152b0a9830dd9631bc5b1&width=1472&height=828&smart=true",
			"__v": 0,
			"createdAt": "2025-03-15T19:55:57.177Z",
			"updatedAt": "2025-03-15T19:55:57.177Z"
		},
		"__v": 0,
		"createdAt": "2025-03-15T19:55:57.365Z",
		"updatedAt": "2025-03-15T19:55:57.365Z"
	},
	{
		"_id": "67d5db4d35064941ea76cc95",
		"foodName": "Salsa de soja",
		"img": "https://www.arrozsos.es/wp-content/uploads/2024/07/soja.jpg",
		"country": {
			"_id": "67d5db4d35064941ea76cc8e",
			"countryName": "Japón",
			"img": "https://img.asmedia.epimg.net/resizer/v2/T3W5EEBTBBDWXMFBH7XV7JYPDM.jpg?auth=647e76fa9783c47438a9633fbd54aa4430fd3daea16152b0a9830dd9631bc5b1&width=1472&height=828&smart=true",
			"__v": 0,
			"createdAt": "2025-03-15T19:55:57.177Z",
			"updatedAt": "2025-03-15T19:55:57.177Z"
		},
		"__v": 0,
		"createdAt": "2025-03-15T19:55:57.365Z",
		"updatedAt": "2025-03-15T19:55:57.365Z"
	}
]
```

### 2. **Obtener un plato por su id**
- **URL**: "/api/v1/foods/:id"
- **Método**: "GET"
- **Descripción**: Obtiene un plato por su id en la base de datos.
- - **Parámetros**:
    - `id`(requerido): El identificador único del plato. 
- **Respuesta de ejemplo**:
```json
{
	"_id": "67d5db4d35064941ea76cc92",
	"foodName": "Aceitunas",
	"img": "https://www.aceitunasbravo.com/wp-content/uploads/2024/06/Aceitunas-mananilla-Con-hueso-M-web.png",
	"country": {
		"_id": "67d5db4d35064941ea76cc90",
		"countryName": "España",
		"img": "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/08/23/bandera-espana-freepik-1.jpeg",
		"__v": 0,
		"createdAt": "2025-03-15T19:55:57.179Z",
		"updatedAt": "2025-03-15T19:55:57.179Z"
	},
	"__v": 0,
	"createdAt": "2025-03-15T19:55:57.364Z",
	"updatedAt": "2025-03-15T19:55:57.364Z"
}
```

### 3. **Crear un nuevo plato**
- **URL**: "/api/v1/foods"
- **Método**: "POST"
- **Descripción**: Crea un nuevo plato en la base de datos.
- **En la pestaña "Body"**:
    -  Selecciona **Form Data** en desplegable
    - Añade los siguientes campos:
	    - name: `foodName`  → value: `nombre del plato` → type: `text`
	    - name: `img`  → value: `Choose File` → type: `file`
	    - name: `country` → value: `id del pais` → type: `text`
	    
- **Respuesta de ejemplo**:
```json
{
	"foodName": "Tarta de Naranja",
	"_id": "67d6b60e370267d943d74f1c",
	"img": "https://res.cloudinary.com/dqhivvhua/image/upload/v1742124558/foodAtlas/cs5hev3pgeo708adf9ww.jpg",
	"createdAt": "2025-03-16T11:29:18.784Z",
	"updatedAt": "2025-03-16T11:29:18.784Z",
	"__v": 0
}
```

### 4. **Actualizar un plato**
- **URL**: "/api/v1/foods/:id"
- **Método**: "PUT"
- **Descripción**: Actualiza un plato existente.
- **Parametros**:
    - `id`(requerido): El identificador único del plato.  
- **En la pestaña "Body"**:
    -  Selecciona **Form Data** en desplegable
    - Añade los siguientes campos:
	    - name: `foodName`  → value: `nombre del plato` → type: `text`
	    - name: `img`  → value: `Choose File` → type: `file`
	    - name: `country` → value: `id del pais` → type: `text`
	  
- **Respuesta de ejemplo**:
    ```json
   {
		"_id": "67d6b60e370267d943d74f1c",
		"foodName": "Tarta de Naranja",
		"img": "https://res.cloudinary.com/dqhivvhua/image/upload/v1742124609/foodAtlas/gzkesfbr43gxxcd2zius.png",
		"createdAt": "2025-03-16T11:29:18.784Z",
		"updatedAt": "2025-03-16T11:30:09.917Z",
		"__v": 0
	}
    ```
    
### 5. **Eliminar un plato**
- **URL**: "/api/v1/foods/:id"
- **Método**: "DELETE"
- **Descripción**: Elimina un plato de la base de datos.
- **Parametros**:
    - `id`(requerido): El identificador único del plato.  
- **Respuesta de ejemplo**:
    ```json
  {
	"mensaje": "Plato eliminado:",
	"foodDeleted": {
		"_id": "67d6b2091705620baa395bf9",
		"foodName": "Tarta de Naranja",
		"img": "https://res.cloudinary.com/dqhivvhua/image/upload/v1742124234/foodAtlas/bp35xxlg2mvsqzgs5ghk.png",
		"createdAt": "2025-03-16T11:12:09.455Z",
		"updatedAt": "2025-03-16T11:23:55.210Z",
		"__v": 0
		}
	}
    ```

## Installation
Sigue estos pasos para instalar y ejecutar la API REST FILES en tu entorno local:
### 1. Clonar el repositorio
Clona este repositorio en tu maquina local usando el siguiente comando en la consola:
```sh
git clone  https://github.com/Iskoh10/proyecto-8-API-REST-FILES.git
```

### 2. Acceder al directorio del proyecto
Navega al directorio del proyecto clonado:
```sh
cd proyecto-8-API-REST-FILES.git
```

### 3. Instalar las dependencias
Instala las dependencias necesarias:
```sh
npm install
```

### 4. Sembrar datos iniciales (opcional)
Incluye un script de seeds para incluir datos iniciales:
```sh
npm run seed
```

### 5. Iniciar el servidor
Ejecuta el servidor con el comando:
```sh
npm run dev
```
El servidor estará disponible en: http://localhost:3000

### 6. Probar la API REST FILES
Puedes usar la herramienta Insomnia para probar los endpoints de la API REST FILES.

## License

**Free Software, Hell Yeah!**

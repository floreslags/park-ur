--- QUERIES MODULO AUTH

    -- BUSCAR UN USUARIO
    SELECT *
    FROM usuario
    INNER JOIN perfil ON usuario.id = perfil.usuario_id
    WHERE perfil.superadmin = 1 AND perfil.correo = 'sergiofol1093@gmail.com'

    -- SUPER USUARIO CON RENTAS ACTIVAS
    SELECT COUNT(perfil.id) existe
    FROM usuario
    INNER JOIN perfil ON usuario.id = perfil.usuario_id
    INNER JOIN coche ON usuario.id = coche.usuario_id
    INNER JOIN rentas ON coche.id = rentas.coche_id
    WHERE rentas.status = 1 AND perfil.correo = 'sergiofol1093@gmail.com'

-- QUERIES MODULO INICIO

    -- OBTENER INVENTARIO
    SELECT *
    FROM estacionamiento
    INNER JOIN plantas ON plantas.id = estacionamiento.plantas_id
    ORDER BY estacionamiento.id ASC;
    
    -- OBTENER % DISPONIBILIDAD
    SELECT ROUND(((SELECT COUNT(id) FROM estacionamiento WHERE plantas_id = 1) - (SELECT COUNT(id) FROM estacionamiento WHERE plantas_id = 1 AND status = 1 ))*100/(SELECT COUNT(id) FROM estacionamiento WHERE plantas_id = 1)) ocupacion;
